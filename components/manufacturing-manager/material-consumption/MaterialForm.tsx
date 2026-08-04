"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

interface Props {
  id?: string;
}

interface FormData {
  jobCardId: string;
  materialName: string;
  requiredQuantity: number;
  issuedQuantity: number;
  consumedQuantity: number;
  remainingQuantity: number;
  unit: string;
  remarks: string;
}

export default function MaterialConsumptionForm({ id }: Props) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState<FormData>({
    jobCardId: "",
    materialName: "",
    requiredQuantity: 0,
    issuedQuantity: 0,
    consumedQuantity: 0,
    remainingQuantity: 0,
    unit: "gram",
    remarks: "",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    const { name, value } = e.target;


    setFormData((prev) => {

      const updated = {
        ...prev,
        [name]:

          name === "requiredQuantity" ||
          name === "issuedQuantity" ||
          name === "consumedQuantity"

          ? Number(value)

          : value,
      };


      updated.remainingQuantity =
        updated.issuedQuantity -
        updated.consumedQuantity;


      return updated;

    });

  };


  useEffect(() => {

    if (id) {
      fetchConsumption();
    }

  }, [id]);



  const fetchConsumption = async () => {

    try {

      setLoading(true);


      const response = await api.get(
        `/material-consumptions/${id}`
      );


      const data = response.data.data;


      setFormData({

        jobCardId: data.jobCardId || "",

        materialName: data.materialName || "",

        requiredQuantity: data.requiredQuantity || 0,

        issuedQuantity: data.issuedQuantity || 0,

        consumedQuantity: data.consumedQuantity || 0,

        remainingQuantity:
          data.remainingQuantity || 0,

        unit: data.unit || "gram",

        remarks: data.remarks || "",

      });


    } catch(error){

      console.error(error);

      alert("Failed to load material consumption");

    }
    finally{

      setLoading(false);

    }

  };



const handleSubmit = async (
  e: React.FormEvent
) => {

  e.preventDefault();

  try {

    setLoading(true);

    if (id) {

      await api.put(
        `/material-consumptions/${id}`,
        formData
      );

      alert("Material Consumption Updated Successfully");

    } else {

      await api.post(
        "/material-consumptions",
        formData
      );

      alert("Material Consumption Created Successfully");

    }

    router.push("/manufacturing-manager/material-consumption?tab=gold");

    router.refresh();

  } catch (error: any) {

    alert(
      error.response?.data?.message ||
      "Something went wrong"
    );

  } finally {

    setLoading(false);

  }

};



  return (

    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border-theme bg-background-secondary p-6"
    >


      <h2 className="mb-8 text-2xl font-bold text-text-primary">

        {id
          ? "Edit Material Consumption"
          : "Add Material Consumption"}

      </h2>



      <div className="grid gap-6 md:grid-cols-2">


        <div>

          <label className="mb-2 block text-sm text-text-secondary">
            Job Card ID
          </label>

          <input

            name="jobCardId"

            value={formData.jobCardId}

            onChange={handleChange}

            className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-text-primary outline-none focus:border-[#D4AF37]"

            required

          />

        </div>



        <div>

          <label className="mb-2 block text-sm text-text-secondary">
            Material Name
          </label>

          <input

            name="materialName"

            value={formData.materialName}

            onChange={handleChange}

            className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-text-primary outline-none focus:border-[#D4AF37]"

            required

          />

        </div>




        <div>

          <label className="mb-2 block text-sm text-text-secondary">
            Required Quantity
          </label>

          <input

            type="number"

            name="requiredQuantity"

            value={formData.requiredQuantity}

            onChange={handleChange}

            className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-text-primary"

          />

        </div>




        <div>

          <label className="mb-2 block text-sm text-text-secondary">
            Issued Quantity
          </label>

          <input

            type="number"

            name="issuedQuantity"

            value={formData.issuedQuantity}

            onChange={handleChange}

            className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-text-primary"

          />

        </div>

        <div>

          <label className="mb-2 block text-sm text-text-secondary">
            Consumed Quantity
          </label>

          <input

            type="number"

            name="consumedQuantity"

            value={formData.consumedQuantity}

            onChange={handleChange}

            className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-text-primary"

          />

        </div>




        <div>

          <label className="mb-2 block text-sm text-text-secondary">
            Remaining Quantity
          </label>

          <input

            value={formData.remainingQuantity}

            readOnly

            className="w-full rounded-xl border border-border-theme bg-[#222] px-4 py-3 text-text-secondary"

          />

        </div>




        <div>

          <label className="mb-2 block text-sm text-text-secondary">
            Unit
          </label>

          <select

            name="unit"

            value={formData.unit}

            onChange={handleChange}

            className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-text-primary"

          >

            <option value="gram">
              Gram
            </option>

            <option value="piece">
              Piece
            </option>

          </select>

        </div>


      </div>



      <div className="mt-6">

        <label className="mb-2 block text-sm text-text-secondary">
          Remarks
        </label>


        <input

          name="remarks"

          value={formData.remarks}

          onChange={handleChange}

          className="w-full rounded-xl border border-border-theme bg-background-primary px-4 py-3 text-text-primary"

        />

      </div>




      <div className="mt-8 flex justify-end">

        <button

          disabled={loading}

          className="rounded-xl bg-[#D4AF37] px-8 py-3 font-semibold text-black"

        >

          {loading
            ? "Saving..."
            : id
            ? "Update Material Consumption"
            : "Create Material Consumption"}

        </button>

      </div>



    </form>

  );

}