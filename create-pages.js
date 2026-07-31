const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'app', 'store', '[domain]');

const pages = [
  {
    route: 'size-guide',
    title: 'Size Guide',
    desc: 'Find the perfect fit for your rings, bangles, and necklaces.',
  },
  {
    route: 'care',
    title: 'Jewelry Care',
    desc: 'Learn how to preserve the brilliance of your masterpieces.',
  },
  {
    route: 'certification',
    title: 'Certification',
    desc: 'Our commitment to authentic, conflict-free, and hallmarked jewelry.',
  },
  {
    route: 'book-appointment',
    title: 'Book an Appointment',
    desc: 'Schedule a private consultation at our boutique.',
  },
  {
    route: 'journal',
    title: 'The Journal',
    desc: 'Editorial stories, styling guides, and brand heritage.',
  },
  {
    route: 'faq',
    title: 'FAQ',
    desc: 'Answers to your most frequently asked questions.',
  },
  {
    route: 'contact',
    title: 'Contact Us',
    desc: 'Reach out to our dedicated concierge team.',
  },
  {
    route: 'policies/shipping',
    title: 'Shipping Policy',
    desc: 'Complimentary, insured, and secure global shipping details.',
  },
  {
    route: 'policies/returns',
    title: 'Returns & Exchanges',
    desc: 'Our 14-day global return policy for your peace of mind.',
  },
  {
    route: 'policies/privacy',
    title: 'Privacy Policy',
    desc: 'How we protect your personal and payment information.',
  },
  {
    route: 'policies/terms',
    title: 'Terms of Service',
    desc: 'The terms and conditions governing our platform.',
  },
  {
    route: 'policies/warranty',
    title: 'Lifetime Warranty',
    desc: 'Our promise of enduring quality and craftsmanship.',
  }
];

pages.forEach(p => {
  const dirPath = path.join(basePath, p.route);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const content = `export default function Page() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">${p.title}</h1>
        <p className="text-white/60 text-lg font-light">${p.desc}</p>
      </div>
      <div className="border-t border-white/10 pt-12 text-white/70 font-sans leading-relaxed space-y-6">
        <p>This is placeholder content for ${p.title}. In a production environment, this page would contain the full detailed text and interactive components relevant to this section.</p>
        <p>We are committed to providing the highest standard of service and transparency to our exclusive clientele.</p>
      </div>
    </div>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

console.log('All remaining pages created successfully.');
