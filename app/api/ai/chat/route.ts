import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    let tenantId = session.tenantId;
    if (!tenantId) {
      const user = await prisma.user.findUnique({ where: { id: session.userId } });
      if (user?.tenantId) {
        tenantId = user.tenantId;
      } else {
        return NextResponse.json({ error: 'Unauthorized. No Tenant ID found.' }, { status: 401 });
      }
    }

    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const text = message.toLowerCase();
    let reply = "";

    // Simulate AI thinking delay for a more natural feel
    await new Promise(resolve => setTimeout(resolve, 800));

    // Rule-Based Logic
    if (text.includes("sales") || text.includes("revenue")) {
      const invoices = await prisma.invoice.findMany({
        where: { tenantId, status: { in: ['COMPLETED', 'PAID', 'DELIVERED'] } }
      });
      // fallback if no completed
      const allInvoices = await prisma.invoice.findMany({ where: { tenantId } });
      const activeInvoices = invoices.length > 0 ? invoices : allInvoices;
      
      const totalAmount = activeInvoices.reduce((sum, inv) => sum + (inv.totalAmount || 0), 0);
      
      reply = `You have generated a total revenue of ₹${totalAmount.toLocaleString("en-IN")} from ${activeInvoices.length} sales invoices.`;
      
    } else if (text.includes("customer") || text.includes("client")) {
      const customers = await prisma.customer.count({
        where: { tenantId }
      });
      reply = `You currently have ${customers} registered customers in your database.`;
      
    } else if (text.includes("stock") || text.includes("inventory") || text.includes("product")) {
      const products = await prisma.product.count({
        where: { tenantId }
      });
      reply = `Your inventory currently holds ${products} active products.`;
      
    } else if (text.includes("repair")) {
      const repairs = await prisma.repairOrder.count({
        where: { tenantId }
      });
      reply = `You have ${repairs} total repair orders logged in the system.`;
      
    } else if (text.includes("help") || text.includes("what can you do")) {
      reply = "I can fetch real-time data from your ERP! Try asking me things like:\n- 'Show me my total sales'\n- 'How many customers do we have?'\n- 'What is our stock count?'\n- 'How many repair orders are pending?'";
    } else if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
      reply = "Hello! 👋 Welcome to Luxury Gold ERP AI Assistant. How can I help you today?";
    } else {
      reply = "I'm still learning and didn't quite catch that. I can currently help you with sales, inventory, customers, and repairs. Try asking 'Show my sales report'.";
    }

    return NextResponse.json({ reply });

  } catch (error) {
    console.error('AI Chat error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
