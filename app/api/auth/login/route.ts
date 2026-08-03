import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { createSession } from '@/lib/session';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      include: { role: true, tenant: true },
    });

    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    if (user.tenant && user.tenant.approvalStatus === 'PENDING') {
      return NextResponse.json({ error: 'Your account is pending approval by the Super Admin.' }, { status: 403 });
    }
    
    if (user.tenant && user.tenant.approvalStatus === 'REJECTED') {
      return NextResponse.json({ error: 'Your account registration was rejected.' }, { status: 403 });
    }

    await createSession(user.id, user.role.name, user.tenantId);

    // Create Audit Log
    if (user.tenantId) {
      await prisma.activityLog.create({
        data: {
          action: 'LOGIN',
          module: 'AUTH',
          description: `User ${user.email} logged in.`,
          userId: user.id,
          tenantId: user.tenantId,
        }
      }).catch(err => console.error("Failed to log activity:", err));
    }
    
    return NextResponse.json({
      message: 'Login successful',
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role.name,
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
