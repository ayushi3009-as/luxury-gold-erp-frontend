export default function CustomOrdersPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen text-center">
      <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">Bespoke Services</p>
      <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Custom Orders</h1>
      <p className="text-white/60 mb-16 text-lg font-light leading-relaxed">
        Work directly with our master designers to create a one-of-a-kind masterpiece that perfectly captures your unique vision and legacy.
      </p>

      <div className="bg-[#111]/50 border border-white/5 p-8 md:p-12 text-left">
        <h3 className="text-2xl font-serif text-white mb-8">Request a Consultation</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:border-gold outline-none" />
            <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:border-gold outline-none" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:border-gold outline-none" />
          <textarea placeholder="Describe your vision (e.g. Engagement ring, heirloom redesign)..." rows={4} className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:border-gold outline-none resize-none"></textarea>
          <button className="w-full border border-gold text-gold py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-gold hover:text-black transition-colors duration-500 ease-luxury mt-4">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
