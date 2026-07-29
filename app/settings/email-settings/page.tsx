import {
  Mail,
  Save,
} from "lucide-react";

export default function EmailSettings() {

  return (
    <div className="p-8 space-y-8">


      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Email Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Configure email server and notification settings
        </p>

      </div>



      {/* Email Configuration Card */}

      <div className="bg-[#111827] rounded-xl p-8 space-y-6">


        <div className="flex items-center gap-3">

          <Mail 
            size={28}
            className="text-blue-400"
          />

          <h2 className="text-xl font-semibold text-white">
            SMTP Configuration
          </h2>

        </div>



        <div className="grid grid-cols-2 gap-6">


          {/* SMTP Host */}

          <div>

            <label className="text-gray-300">
              SMTP Host
            </label>

            <input
              type="text"
              placeholder="smtp.gmail.com"
              className="w-full mt-2 bg-[#1f2937] p-3 rounded-lg text-white outline-none"
            />

          </div>



          {/* Port */}

          <div>

            <label className="text-gray-300">
              SMTP Port
            </label>

            <input
              type="text"
              placeholder="587"
              className="w-full mt-2 bg-[#1f2937] p-3 rounded-lg text-white outline-none"
            />

          </div>



          {/* Email */}

          <div>

            <label className="text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="company@gmail.com"
              className="w-full mt-2 bg-[#1f2937] p-3 rounded-lg text-white outline-none"
            />

          </div>




          {/* Password */}

          <div>

            <label className="text-gray-300">
              Email Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full mt-2 bg-[#1f2937] p-3 rounded-lg text-white outline-none"
            />

          </div>


        </div>



        {/* Notification */}

        <div className="flex justify-between items-center bg-[#1f2937] p-4 rounded-lg">


          <div>

            <h3 className="text-white font-medium">
              Enable Email Notification
            </h3>

            <p className="text-gray-400 text-sm">
              Send email alerts and updates
            </p>

          </div>


          <input
            type="checkbox"
            className="w-5 h-5"
          />


        </div>




        {/* Save Button */}

        <button className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700">

          <Save size={20}/>

          Save Settings

        </button>



      </div>


    </div>
  );
}