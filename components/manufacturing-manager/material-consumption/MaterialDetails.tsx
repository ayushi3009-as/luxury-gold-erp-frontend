"use client";

import { useEffect, useState } from "react";
import {
  Package,
  Coins,
  Scale,
  FileText,
  Calendar,
} from "lucide-react";

import api from "@/lib/api";

interface Props {
  id: string;
}

interface MaterialData {
  jobCardId: string;
  materialName: string;
  requiredQuantity: number;
  issuedQuantity: number;
  consumedQuantity: number;
  remainingQuantity: number;
  unit: string;
  issuedDate: string;
  remarks?: string;
  jobCard?: {
    jobCardNumber?: string;
  };
}


export default function MaterialConsumptionDetails({
  id,
}: Props) {


  const [data, setData] = useState<MaterialData | null>(null);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    if(id){
      fetchDetails();
    }

  }, [id]);



  const fetchDetails = async () => {

    try {

      setLoading(true);

      const response = await api.get(
        `/material-consumptions/${id}`
      );


      setData(response.data.data);


    } catch(error){

      console.error(error);

      alert(
        "Failed to load Material Consumption details"
      );

    }
    finally{

      setLoading(false);

    }

  };



  if(loading){

    return (

      <div className="rounded-2xl border border-border-theme bg-background-secondary p-8 text-center text-text-secondary">

        Loading...

      </div>

    );

  }



  if(!data){

    return (

      <div className="rounded-2xl border border-border-theme bg-background-secondary p-8 text-center text-text-secondary">

        No Data Found

      </div>

    );

  }



  return (

    <div className="rounded-2xl border border-border-theme bg-background-secondary p-8">


      <h2 className="mb-8 text-3xl font-bold text-text-primary">

        Material Consumption Details

      </h2>



      <div className="grid gap-6 md:grid-cols-2">



        <div className="rounded-xl border border-border-theme bg-background-primary p-5">

          <Package
            className="mb-3 text-[#D4AF37]"
            size={28}
          />

          <p className="text-text-secondary">
            Job Card
          </p>

          <h3 className="mt-2 text-xl font-semibold text-text-primary">

            {data.jobCard?.jobCardNumber ||
             data.jobCardId}

          </h3>

        </div>




        <div className="rounded-xl border border-border-theme bg-background-primary p-5">

          <Coins
            className="mb-3 text-[#D4AF37]"
            size={28}
          />

          <p className="text-text-secondary">
            Material
          </p>

          <h3 className="mt-2 text-xl font-semibold text-text-primary">

            {data.materialName}

          </h3>

        </div>





        <div className="rounded-xl border border-border-theme bg-background-primary p-5">

          <Scale
            className="mb-3 text-[#D4AF37]"
            size={28}
          />

          <p className="text-text-secondary">
            Issued Quantity
          </p>

          <h3 className="mt-2 text-xl font-semibold text-blue-400">

            {data.issuedQuantity} {data.unit}

          </h3>

        </div>





        <div className="rounded-xl border border-border-theme bg-background-primary p-5">

          <Scale
            className="mb-3 text-[#D4AF37]"
            size={28}
          />

          <p className="text-text-secondary">
            Consumed Quantity
          </p>

          <h3 className="mt-2 text-xl font-semibold text-green-400">

            {data.consumedQuantity} {data.unit}

          </h3>

        </div>





        <div className="rounded-xl border border-border-theme bg-background-primary p-5">

          <Scale
            className="mb-3 text-[#D4AF37]"
            size={28}
          />

          <p className="text-text-secondary">
            Remaining Quantity
          </p>

          <h3 className="mt-2 text-xl font-semibold text-yellow-400">

            {data.remainingQuantity} {data.unit}

          </h3>

        </div>





        <div className="rounded-xl border border-border-theme bg-background-primary p-5">

          <Calendar
            className="mb-3 text-[#D4AF37]"
            size={28}
          />

          <p className="text-text-secondary">
            Issued Date
          </p>

          <h3 className="mt-2 text-xl font-semibold text-text-primary">

            {new Date(
              data.issuedDate
            ).toLocaleDateString()}

          </h3>

        </div>



      </div>





      <div className="mt-6 rounded-xl border border-border-theme bg-background-primary p-5">


        <FileText
          className="mb-3 text-[#D4AF37]"
          size={28}
        />


        <p className="text-text-secondary">
          Remarks
        </p>


        <h3 className="mt-2 text-lg text-text-primary">

          {data.remarks || "No remarks"}

        </h3>


      </div>



    </div>

  );

}