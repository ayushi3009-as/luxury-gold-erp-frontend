"use client";


export default function PaymentForm() {


    return (

        <div
            className="
            bg-[#111]
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
                Payment Information
            </h2>



            <div
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-4
                gap-4
                "
            >


                <input
                    placeholder="Payment Amount"
                    className="
                    bg-[#050505]
                    border
                    border-gray-700
                    rounded-xl
                    p-3
                    "
                />



                <select
                    className="
                    bg-[#050505]
                    border
                    border-gray-700
                    rounded-xl
                    p-3
                    "
                >

                    <option>
                        Payment Mode
                    </option>

                    <option>
                        Cash
                    </option>

                    <option>
                        Bank Transfer
                    </option>

                    <option>
                        UPI
                    </option>

                    <option>
                        Cheque
                    </option>

                </select>



                <input
                    placeholder="Transaction Reference"
                    className="
                    bg-[#050505]
                    border
                    border-gray-700
                    rounded-xl
                    p-3
                    "
                />



                <select
                    className="
                    bg-[#050505]
                    border
                    border-gray-700
                    rounded-xl
                    p-3
                    "
                >

                    <option>
                        Status
                    </option>

                    <option>
                        Completed
                    </option>

                    <option>
                        Pending
                    </option>

                </select>


            </div>


        </div>

    );

}