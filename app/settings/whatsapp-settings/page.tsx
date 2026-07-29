import {
  MessageCircle,
  Save,
} from "lucide-react";

export default function WhatsAppSettings() {

  return (
    <div className="p-8 space-y-8">


      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          WhatsApp Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Configure WhatsApp notification settings
        </p>
      </div>



      {/* Card */}

      <div className="bg-[#111827] rounded-xl p-8 space-y-6">


        <div className="flex items-center gap-3">

          <MessageCircle 
            className="text-green-400"
            size={28}
          />

          <h2 className="text-xl font-semibold text-white">
            WhatsApp Configuration
          </h2>

        </div>



        {/* Enable */}

        <div className="flex justify-between items-center bg-[#1f2937] p-4 rounded-lg">

          <div>
            <h3 className="text-white font-medium">
              Enable WhatsApp Notification
            </h3>

            <p className="text-gray-400 text-sm">
              Send automatic messages to employees
            </p>
          </div>


          <input 
            type="checkbox"
            className="w-5 h-5"
          />

        </div>



        {/* Inputs */}

        <div className="grid grid-cols-2 gap-6">


          <div>
            <label className="text-gray-300">
              WhatsApp API Key
            </label>

            <input
              type="text"
              placeholder="Enter API Key"
              className="w-full mt-2 bg-[#1f2937] p-3 rounded-lg text-white outline-none"
            />

          </div>



          <div>
            <label className="text-gray-300">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="+91 XXXXX XXXXX"
              className="w-full mt-2 bg-[#1f2937] p-3 rounded-lg text-white outline-none"
            />

          </div>


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