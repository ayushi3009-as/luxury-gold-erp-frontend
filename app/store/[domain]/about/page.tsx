import prisma from '@/lib/prisma';

export default async function AboutPage({ params }: { params: { domain: string } }) {
  const tenant = await prisma.tenant.findUnique({
    where: { subdomain: params.domain }
  });

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen text-center bg-white">
      <p className="text-gray-500 uppercase tracking-[0.3em] text-sm font-semibold mb-6">Our Heritage</p>
      <h1 className="text-5xl md:text-6xl font-serif text-[#111] mb-12 leading-tight">
        A Legacy of <br /> Flawless Craftsmanship
      </h1>

      <div className="w-full aspect-video bg-gray-100 mb-16 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1600&auto=format&fit=crop&q=80" 
          alt="Craftsmanship" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="space-y-8 text-lg text-gray-700 font-light leading-relaxed text-left">
        <p>
          {tenant?.aboutUsText || 
          "Founded on the principles of purity and perfection, we have been crafting timeless masterpieces since 1995. Our journey began with a simple vision: to bring the world's most exquisite jewelry to connoisseurs who appreciate true artistry."}
        </p>
        <p>
          Every piece in our collection is a testament to our dedication to quality. From sourcing the finest IF-grade diamonds to working with 22K pure gold, our artisans pour their heart and soul into creating jewelry that not only adorns you but becomes a part of your legacy.
        </p>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-16 text-left">
        <div>
          <h3 className="text-2xl font-serif text-[#111] mb-4">Purity</h3>
          <p className="text-gray-500 text-sm font-light">Certified 22K and 24K gold, verified for authenticity.</p>
        </div>
        <div>
          <h3 className="text-2xl font-serif text-[#111] mb-4">Precision</h3>
          <p className="text-gray-500 text-sm font-light">Flawless diamonds cut to maximize brilliance and fire.</p>
        </div>
        <div>
          <h3 className="text-2xl font-serif text-[#111] mb-4">Passion</h3>
          <p className="text-gray-500 text-sm font-light">Handcrafted by master artisans with decades of experience.</p>
        </div>
      </div>
    </div>
  );
}
