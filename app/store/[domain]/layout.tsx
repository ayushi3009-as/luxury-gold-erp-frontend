import prisma from '@/lib/prisma';

export default async function StoreLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { domain: string };
}) {
  const tenant = await prisma.tenant.findUnique({
    where: { subdomain: params.domain }
  });

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-gray-900 bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:translate-y-0 lg:opacity-100 ">
      <div className="relative h-8 overflow-hidden border-b border-[#ece7dc] bg-[#fbfaf7] text-[#27251f]">
        <div className="flex h-full items-center justify-center px-10 sm:px-14">
          <span
            className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-medium text-center text-[#484238]"
            style={{ opacity: "1", transform: "translateY(-7.19519px)" }}
          >
            Free Shipping on Orders Above ₹999
          </span>
        </div>
        <button
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-[#8b8375] hover:text-[#2d2a24] transition-colors"
          aria-label="Previous announcement"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <button
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-[#8b8375] hover:text-[#2d2a24] transition-colors"
          aria-label="Next announcement"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
      <nav className="border-b transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] border-[#f1eee8] bg-white">
        <div className="w-full">
          <div className="hidden lg:block">
            <div className="relative flex h-[82px] xl:h-[86px] items-center justify-between pl-10 pr-5 xl:pl-16 xl:pr-7">
              <div className="flex flex-1 items-center justify-start gap-8 pr-8 xl:gap-10">
                <a
                  className="group relative py-3 text-[10.5px] xl:text-[11px] tracking-[0.24em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-[#15171b]"
                  href="/"
                  data-discover="true"
                >
                  Home
                  <span className="absolute bottom-1 left-0 h-px bg-gradient-to-r from-[#b9a36a] via-[#d7d3ca] to-[#b9a36a] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] w-full opacity-100"></span>
                </a>
                <a
                  className="group relative py-3 text-[10.5px] xl:text-[11px] tracking-[0.24em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-[#6f6a61] hover:text-[#17191d]"
                  href="/collections"
                  data-discover="true"
                >
                  Shop
                  <span className="absolute bottom-1 left-0 h-px bg-gradient-to-r from-[#b9a36a] via-[#d7d3ca] to-[#b9a36a] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] w-0 opacity-0"></span>
                </a>
                <a
                  className="group relative py-3 text-[10.5px] xl:text-[11px] tracking-[0.24em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-[#6f6a61] hover:text-[#17191d]"
                  href="/#about"
                  data-discover="true"
                >
                  About Us
                  <span className="absolute bottom-1 left-0 h-px bg-gradient-to-r from-[#b9a36a] via-[#d7d3ca] to-[#b9a36a] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] w-0 opacity-0"></span>
                </a>
                <a
                  className="group relative py-3 text-[10.5px] xl:text-[11px] tracking-[0.24em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-[#6f6a61] hover:text-[#17191d]"
                  href="/contact"
                  data-discover="true"
                >
                  Contact Us
                  <span className="absolute bottom-1 left-0 h-px bg-gradient-to-r from-[#b9a36a] via-[#d7d3ca] to-[#b9a36a] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] w-0 opacity-0"></span>
                </a>
              </div>
              <a
                className="absolute left-1/2 z-10 -translate-x-1/2 shrink-0 px-6 xl:px-10"
                aria-label="Microtechnique IT Home"
                href="/"
                data-discover="true"
              >
                <span className="text-lg md:text-xl font-serif tracking-widest text-[#111] font-bold uppercase">MICROTECHNIQUE IT</span>
              </a>
              <div className="flex flex-1 items-center justify-end">
                <div className="flex items-center gap-1.5 rounded-full border border-[#f0ece4] bg-white/60 px-1.5 py-1 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full text-[#20242b] transition-all duration-300 hover:bg-[#f8f6f1] hover:text-[#0e1116]"
                    aria-label="Search"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-search"
                      aria-hidden="true"
                    >
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </button>
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#f8f6f1] hover:text-[#0e1116] text-[#20242b]"
                    aria-label="Account"
                    href="/login"
                    data-discover="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-user"
                      aria-hidden="true"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </a>
                  <a
                    className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#f8f6f1] hover:text-[#0e1116] text-[#20242b]"
                    aria-label="Wishlist"
                    href="/wishlist"
                    data-discover="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-heart"
                      aria-hidden="true"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </a>
                  <a
                    className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#f8f6f1] hover:text-[#0e1116] text-[#20242b]"
                    aria-label="Cart"
                    href="/cart"
                    data-discover="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shopping-bag"
                      aria-hidden="true"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-[#f0ece5] bg-[#fffefa]/92">
              <div className="scrollbar-hide flex h-[42px] items-center justify-center gap-9 overflow-x-auto px-8 xl:gap-12">
                <a
                  className="relative shrink-0 py-3 text-[10px] tracking-[0.24em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-[#7a7469] hover:text-[#17191d]"
                  href="/collections/rings"
                  data-discover="true"
                >
                  Rings
                  <span className="absolute bottom-2 left-0 h-px bg-gradient-to-r from-[#b9a36a] via-[#d7d3ca] to-[#b9a36a] transition-all duration-500 w-0 opacity-0"></span>
                </a>
                <a
                  className="relative shrink-0 py-3 text-[10px] tracking-[0.24em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-[#7a7469] hover:text-[#17191d]"
                  href="/collections/necklaces"
                  data-discover="true"
                >
                  Necklaces
                  <span className="absolute bottom-2 left-0 h-px bg-gradient-to-r from-[#b9a36a] via-[#d7d3ca] to-[#b9a36a] transition-all duration-500 w-0 opacity-0"></span>
                </a>
                <a
                  className="relative shrink-0 py-3 text-[10px] tracking-[0.24em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-[#7a7469] hover:text-[#17191d]"
                  href="/collections/earrings"
                  data-discover="true"
                >
                  Earrings
                  <span className="absolute bottom-2 left-0 h-px bg-gradient-to-r from-[#b9a36a] via-[#d7d3ca] to-[#b9a36a] transition-all duration-500 w-0 opacity-0"></span>
                </a>
                <a
                  className="relative shrink-0 py-3 text-[10px] tracking-[0.24em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-[#7a7469] hover:text-[#17191d]"
                  href="/collections/bracelets"
                  data-discover="true"
                >
                  Bracelets
                  <span className="absolute bottom-2 left-0 h-px bg-gradient-to-r from-[#b9a36a] via-[#d7d3ca] to-[#b9a36a] transition-all duration-500 w-0 opacity-0"></span>
                </a>
                <a
                  className="relative shrink-0 py-3 text-[10px] tracking-[0.24em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-[#7a7469] hover:text-[#17191d]"
                  href="/collections/anklets"
                  data-discover="true"
                >
                  Anklets
                  <span className="absolute bottom-2 left-0 h-px bg-gradient-to-r from-[#b9a36a] via-[#d7d3ca] to-[#b9a36a] transition-all duration-500 w-0 opacity-0"></span>
                </a>
                <a
                  className="relative shrink-0 py-3 text-[10px] tracking-[0.24em] uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-[#7a7469] hover:text-[#17191d]"
                  href="/collections/pendents"
                  data-discover="true"
                >
                  Pendents
                  <span className="absolute bottom-2 left-0 h-px bg-gradient-to-r from-[#b9a36a] via-[#d7d3ca] to-[#b9a36a] transition-all duration-500 w-0 opacity-0"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="relative flex h-16 items-center justify-between px-4 sm:h-[68px] sm:px-6">
              <button
                className="flex h-11 w-11 -ml-2 items-center justify-center rounded-full text-[#15171d] transition-all duration-300 active:bg-[#f5f2ec]"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                  aria-hidden="true"
                >
                  <path d="M4 12h16"></path>
                  <path d="M4 18h16"></path>
                  <path d="M4 6h16"></path>
                </svg>
              </button>
              <a
                className="absolute left-1/2 z-10 -translate-x-1/2"
                aria-label="Microtechnique IT Home"
                href="/"
                data-discover="true"
              >
                <span className="text-lg md:text-xl font-serif tracking-widest text-[#111] font-bold uppercase">MICROTECHNIQUE IT</span>
              </a>
              <div className="flex items-center gap-0.5">
                <button
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-[#15171d] transition-all duration-300 active:bg-[#f5f2ec]"
                  aria-label="Search"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search"
                    aria-hidden="true"
                  >
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                </button>
                <a
                  className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-[#15171d] transition-all duration-300 active:bg-[#f5f2ec]"
                  aria-label="Wishlist"
                  href="/wishlist"
                  data-discover="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart"
                    aria-hidden="true"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </a>
                <a
                  className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-[#15171d] transition-all duration-300 active:bg-[#f5f2ec]"
                  aria-label="Cart"
                  href="/cart"
                  data-discover="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-bag"
                    aria-hidden="true"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                    <path d="M3 6h18"></path>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
      <div className="site-header-spacer hidden lg:block" aria-hidden="true"></div>
      <main className="flex-grow pt-[64px] sm:pt-[68px] lg:pt-[118px]">
        {children}
      </main>
      <footer
      id="contact"
      className="scroll-mt-32 w-full min-w-0 bg-gray-950 text-gray-300"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <span className="text-lg md:text-xl font-serif tracking-widest text-text-primary font-bold uppercase">MICROTECHNIQUE IT</span>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-400 mb-4 sm:mb-6">
              Crafting timeless silver jewellery that celebrates elegance and
              individuality. Every piece tells a story.
            </p>
            <a
              href="https://www.instagram.com/microtechniqueit?igsh=MXhhMDBmaTdnNWszeQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm hover:text-text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>{" "}
              @microtechniqueit
            </a>
          </div>
          <div>
            <h3 className="text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-text-primary mb-3 sm:mb-4 font-medium">
              Shop
            </h3>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                className="text-xs sm:text-sm text-gray-400 hover:text-text-primary transition-colors"
                href="/collections/rings"
                data-discover="true"
              >
                Rings
              </a>
              <a
                className="text-xs sm:text-sm text-gray-400 hover:text-text-primary transition-colors"
                href="/collections/necklaces"
                data-discover="true"
              >
                Necklaces
              </a>
              <a
                className="text-xs sm:text-sm text-gray-400 hover:text-text-primary transition-colors"
                href="/collections/earrings"
                data-discover="true"
              >
                Earrings
              </a>
              <a
                className="text-xs sm:text-sm text-gray-400 hover:text-text-primary transition-colors"
                href="/collections/bracelets"
                data-discover="true"
              >
                Bracelets
              </a>
              <a
                className="text-xs sm:text-sm text-gray-400 hover:text-text-primary transition-colors"
                href="/collections/anklets"
                data-discover="true"
              >
                Anklets
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-text-primary mb-3 sm:mb-4 font-medium">
              Help
            </h3>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                className="text-xs sm:text-sm text-gray-400 hover:text-text-primary transition-colors"
                href="/policies/shipping"
                data-discover="true"
              >
                Shipping &amp; Returns
              </a>
              <a
                className="text-xs sm:text-sm text-gray-400 hover:text-text-primary transition-colors"
                href="/size-guide"
                data-discover="true"
              >
                Size Guide
              </a>
              <a
                className="text-xs sm:text-sm text-gray-400 hover:text-text-primary transition-colors"
                href="/care"
                data-discover="true"
              >
                Care Instructions
              </a>
              <a
                className="text-xs sm:text-sm text-gray-400 hover:text-text-primary transition-colors"
                href="/faq"
                data-discover="true"
              >
                FAQs
              </a>
              <a
                className="text-xs sm:text-sm text-gray-400 hover:text-text-primary transition-colors"
                href="/contact"
                data-discover="true"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-text-primary mb-3 sm:mb-4 font-medium">
              Contact
            </h3>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href={`mailto:${tenant?.contactEmail || "hello@microtechniqueit.in"}`}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail sm:hidden"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail hidden sm:block"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>{" "}
                {tenant?.contactEmail || "hello@microtechniqueit.in"}
              </a>
              <a
                href={`tel:${tenant?.contactPhone || "+919876543210"}`}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone sm:hidden"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone hidden sm:block"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>{" "}
                {tenant?.contactPhone || "+91 6355997080"}
              </a>
              <span className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin mt-0.5 shrink-0 sm:hidden"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin mt-0.5 shrink-0 hidden sm:block"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>{" "}
                Mumbai, India
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs text-gray-500">
            © 2025 Microtechnique IT. All rights reserved.
          </p>
          <p className="text-center text-[10px] sm:text-xs text-gray-500 sm:text-left">
            Designed &amp; Developed by{" "}
            <a
              href="https://www.instagram.com/growweb_solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex font-semibold text-text-primary transition-colors hover:text-amber-300 focus:outline-none focus:text-amber-300"
            >
              Grow Web Solutions
              <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-[10px] font-medium text-gray-100 shadow-xl sm:group-hover:block sm:group-focus:block">
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                    aria-hidden="true"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  growweb_solutions
                  <span className="mx-0.5 text-gray-500">|</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +91-9727155628
                </span>
              </span>
            </a>
            <span className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:hidden">
              <a
                href="https://www.instagram.com/growweb_solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                growweb_solutions
              </a>
              <a
                href="tel:+919727155628"
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91-9727155628
              </a>
            </span>
          </p>
          <div className="flex gap-4 sm:gap-6 text-[10px] sm:text-xs text-gray-500">
            <a href="/policies/privacy" className="hover:text-text-primary transition-colors cursor-pointer">
              Privacy
            </a>
            <a href="/policies/terms" className="hover:text-text-primary transition-colors cursor-pointer">
              Terms
            </a>
            <a href="/policies/returns" className="hover:text-text-primary transition-colors cursor-pointer">
              Refund
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
