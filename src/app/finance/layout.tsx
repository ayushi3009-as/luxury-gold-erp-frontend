import { ReactNode } from "react";
import FinanceSidebar from "@/components/layout/FinanceSidebar";


export default function FinanceLayout({

  children

}:{

  children:ReactNode;

}){


return (

<div className="flex bg-[#0B0B0B] min-h-screen">


<FinanceSidebar />


<main className="flex-1">

{children}

</main>


</div>

);


}