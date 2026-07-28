import React from "react";
import PurchaseSidebar from "@/components/purchase/PurchaseSidebar";


export default function PurchaseLayout({

children

}:{

children:React.ReactNode

}){


return (

<div
className="
h-screen
overflow-hidden
bg-[#050505]
text-white
p-5
"
>


<div
className="
h-full
flex
gap-6
"
>


{/* Sidebar */}

<PurchaseSidebar />



{/* Main Content */}

<main
className="
flex-1
overflow-y-auto
pr-2
"
>


{children}


</main>



</div>


</div>

)

}