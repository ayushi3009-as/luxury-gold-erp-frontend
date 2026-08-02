"use client";

import PaymentSupplierDetails from "./PaymentSupplierDetails";
import PaymentForm from "./PaymentForm";
import PaymentSummary from "./PaymentSummary";


export default function CreateSupplierPayment() {

    return (

        <div
            className="
            min-h-screen
            bg-[#050505]
            text-text-primary
            p-4
            sm:p-6
            "
        >

            <div
                className="
                max-w-7xl
                mx-auto
                bg-[#111]
                border
                border-[#D4AF37]/30
                rounded-2xl
                p-5
                space-y-6
                "
            >


                <div>

                    <h1
                        className="
                        text-3xl
                        font-bold
                        text-[#D4AF37]
                        "
                    >
                        Create Supplier Payment
                    </h1>


                    <p
                        className="
                        text-gray-400
                        mt-2
                        "
                    >
                        Manage supplier payment and outstanding balance
                    </p>

                </div>



                <PaymentSupplierDetails />

                <PaymentForm />

                <PaymentSummary />



                <div
                    className="
                    flex
                    flex-col
                    sm:flex-row
                    justify-end
                    gap-4
                    "
                >

                    <button
                        className="
                        border
                        border-gray-600
                        px-5
                        py-3
                        rounded-xl
                        "
                    >
                        Save Draft
                    </button>



                    <button
                        className="
                        bg-[#D4AF37]
                        text-black
                        px-5
                        py-3
                        rounded-xl
                        font-semibold
                        "
                    >
                        Confirm Payment
                    </button>


                </div>


            </div>

        </div>

    );

}