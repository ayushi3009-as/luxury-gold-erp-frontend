"use client";


export default function PaymentSummary() {


    return (

        <div
            className="
            bg-[#050505]
            border
            border-[#D4AF37]/30
            rounded-xl
            p-5
            "
        >


            <h2
                className="
                text-xl
                font-semibold
                text-[#D4AF37]
                mb-4
                "
            >
                Payment Summary
            </h2>



            <div className="space-y-3">


                <div
                    className="
                    flex
                    justify-between
                    "
                >

                    <span className="text-gray-400">
                        Invoice Amount
                    </span>

                    <span>
                        $50,000
                    </span>

                </div>



                <div
                    className="
                    flex
                    justify-between
                    "
                >

                    <span className="text-gray-400">
                        Paid Amount
                    </span>

                    <span>
                        $20,000
                    </span>

                </div>




                <div
                    className="
                    border-t
                    border-gray-700
                    pt-3
                    flex
                    justify-between
                    "
                >

                    <span>
                        Remaining Balance
                    </span>


                    <span
                        className="
                        text-[#D4AF37]
                        font-bold
                        text-xl
                        "
                    >
                        $30,000
                    </span>


                </div>


            </div>


        </div>

    );

}