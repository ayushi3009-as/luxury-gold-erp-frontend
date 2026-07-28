"use client";

import { useState } from "react";
import BillingSidebar from "./BillingSidebar";


export default function MobileSidebar(){


  const [open,setOpen] = useState(false);



  return (

    <>

      {/* Mobile Button */}

      <button
      onClick={()=>setOpen(true)}
      className="
      md:hidden
      fixed
      top-4
      left-4
      z-50
      bg-yellow-500
      text-black
      px-4
      py-2
      rounded-lg
      font-bold
      "
      >

        ☰

      </button>





      {/* Overlay */}

      {
        open && (

          <div
          onClick={()=>setOpen(false)}
          className="
          md:hidden
          fixed
          inset-0
          bg-black/70
          z-40
          "
          />

        )
      }






      {/* Sidebar */}

      <div
      className={`
      fixed
      top-0
      left-0
      h-screen
      w-64
      bg-[#050505]
      z-50
      border-r
      border-yellow-600/20
      transform
      transition-transform
      duration-300

      ${
        open
        ?
        "translate-x-0"
        :
        "-translate-x-full"
      }

      md:hidden
      `}
      >


        <div
        className="
        flex
        justify-end
        p-4
        "
        >

          <button
          onClick={()=>setOpen(false)}
          className="
          text-yellow-400
          text-xl
          "
          >

            ✕

          </button>


        </div>


        <BillingSidebar/>


      </div>



    </>

  );

}