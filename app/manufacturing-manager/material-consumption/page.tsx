"use client";

import { useSearchParams } from "next/navigation";

import MaterialHeader from "@/components/manufacturing-manager/material-consumption/MaterialHeader";
import MaterialTabs from "@/components/manufacturing-manager/material-consumption/MaterialTabs";

import GoldConsumption from "@/components/manufacturing-manager/material-consumption/GoldConsumption";
import SilverConsumption from "@/components/manufacturing-manager/material-consumption/SilverConsumption";
import DiamondConsumption from "@/components/manufacturing-manager/material-consumption/DiamondConsumption";
import StoneConsumption from "@/components/manufacturing-manager/material-consumption/StoneConsumption";
import MaterialSummary from "@/components/manufacturing-manager/material-consumption/MaterialSummary";

import MaterialForm from "@/components/manufacturing-manager/material-consumption/MaterialForm";
import MaterialDetails from "@/components/manufacturing-manager/material-consumption/MaterialDetails";


export default function MaterialConsumptionPage() {

  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") || "all";

  const id = searchParams.get("id");


  return (

    <div className="space-y-6 p-6">


      {/* Header */}

      <MaterialHeader />



      {/* Tabs */}

      <MaterialTabs />



      {/* Content */}

{tab === "gold" && <GoldConsumption />}

{tab === "silver" && <SilverConsumption />}

{tab === "diamond" && <DiamondConsumption />}

{tab === "stone" && <StoneConsumption />}

{tab === "summary" && <MaterialSummary />}

{tab === "add" && <MaterialForm />}

{tab === "edit" && <MaterialForm id={id || ""} />}

{tab === "details" && <MaterialDetails id={id || ""} />}

    </div>

  );
}