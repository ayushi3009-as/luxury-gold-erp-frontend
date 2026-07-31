import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';

export default async function StorefrontPage({ params }: { params: { domain: string } }) {
  // 1. Identify the tenant by subdomain
  const tenant = await prisma.tenant.findUnique({
    where: { subdomain: params.domain }
  });

  if (!tenant) {
    notFound(); // Returns 404 if someone visits random.tivra.marketing
  }

  // 2. Fetch data specific to THIS tenant
  const products = await prisma.product.findMany({
    where: { tenantId: tenant.id },
    take: 10
  });

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">{tenant.name}</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Collections</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main>
        <section className="mb-12">
          <div className="bg-gray-100 p-12 rounded-2xl text-center">
            <h2 className="text-5xl font-bold mb-4">Welcome to {tenant.name}</h2>
            <p className="text-xl text-gray-600">Discover our premium jewellery collection.</p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6">Our Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length === 0 ? (
              <p className="text-gray-500">No products available yet.</p>
            ) : (
              products.map((product) => (
                <div key={product.id} className="border p-4 rounded-xl">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                  <h4 className="font-bold">{product.name}</h4>
                  <p className="text-gray-600">₹{product.price}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
