import BillingSidebar from "@/components/pos/BillingSidebar";
import MobileSidebar from "@/components/pos/MobileSidebar";
import POSHeader from "@/components/pos/POSHeader";


export default function POSLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (

    <div
      className="
      h-screen
      flex
      bg-[#050505]
      text-white
      overflow-hidden
      "
    >


      {/* Desktop Sidebar */}

      <aside
        className="
        hidden
        md:block
        w-64
        h-screen
        shrink-0
        overflow-y-auto
        border-r
        border-yellow-600/20
        bg-[#050505]
        "
      >

        <BillingSidebar />

      </aside>





      {/* Mobile Sidebar */}

      <MobileSidebar />







      {/* Main Area */}

      <div
        className="
        flex-1
        flex
        flex-col
        h-screen
        overflow-hidden
        "
      >



        {/* Header */}

        <header
          className="
          shrink-0
          border-b
          border-yellow-600/20
          bg-[#050505]
          "
        >

          <POSHeader />

        </header>







        {/* Page Content */}

        <main
          className="
          flex-1
          overflow-y-auto
          p-4
          md:p-6
          "
        >

          {children}

        </main>



      </div>



    </div>

  );

}