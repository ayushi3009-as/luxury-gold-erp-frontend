export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen bg-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-[#111] mb-6">Contact Us</h1>
        <p className="text-gray-600 text-lg font-light tracking-wide uppercase text-xs">Reach out to our dedicated concierge team.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-16">
        <div className="space-y-8 text-[#111] font-sans">
          <div>
            <h3 className="font-serif text-2xl mb-4">Our Atelier</h3>
            <p className="text-gray-600 leading-relaxed font-light">
              123 Heritage Walk, <br/>
              Jaipur, Rajasthan 302001 <br/>
              India
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl mb-4">Direct Inquiries</h3>
            <p className="text-gray-600 leading-relaxed font-light mb-2">
              <strong>Email:</strong> microtechniqueit@gmail.com
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              <strong>Phone:</strong> +91 6355997080
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl mb-4">Hours of Operation</h3>
            <p className="text-gray-600 leading-relaxed font-light">
              Monday - Saturday: 10:30 AM - 7:30 PM <br/>
              Sunday: By Appointment Only
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8">
          <h3 className="font-serif text-2xl mb-6 text-[#111]">Send a Message</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
              <input type="text" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
              <input type="email" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
              <textarea rows={4} className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black transition-colors resize-none"></textarea>
            </div>
            <button type="button" className="w-full bg-[#111] text-white py-4 text-xs uppercase tracking-widest font-semibold hover:bg-black transition-colors">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
