import { Bell, Bot, Globe, Moon, Shield } from "lucide-react";

export default function AISettingsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white p-8">

      {/* Header */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-yellow-500">
          AI Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Configure your AI Assistant preferences.
        </p>
      </div>

      <div className="space-y-6">

        {/* AI Model */}

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <Bot className="text-yellow-500" size={24} />
            <h2 className="text-2xl font-semibold">
              AI Model
            </h2>
          </div>

          <select className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3">
            <option>Luxury Gold AI v1</option>
            <option>Luxury Gold AI v2</option>
            <option>GPT Integration</option>
          </select>

        </div>

        {/* Language */}

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-yellow-500" size={24} />
            <h2 className="text-2xl font-semibold">
              Language
            </h2>
          </div>

          <select className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3">
            <option>English</option>
            <option>Hindi</option>
            <option>Gujarati</option>
          </select>

        </div>

        {/* Theme */}

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <Moon className="text-yellow-500" size={24} />
            <h2 className="text-2xl font-semibold">
              Theme
            </h2>
          </div>

          <select className="w-full bg-[#1B1B1B] border border-gray-700 rounded-xl px-4 py-3">
            <option>Dark</option>
            <option>Light</option>
            <option>System Default</option>
          </select>

        </div>

        {/* Notifications */}

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <Bell className="text-yellow-500" size={24} />
            <h2 className="text-2xl font-semibold">
              Notifications
            </h2>
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 accent-yellow-500"
            />

            <span>
              Enable AI Notifications
            </span>
          </label>

        </div>

        {/* Privacy */}

        <div className="bg-[#141414] border border-yellow-500/20 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-yellow-500" size={24} />
            <h2 className="text-2xl font-semibold">
              Privacy
            </h2>
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 accent-yellow-500"
            />

            <span>
              Save AI Chat History
            </span>
          </label>

        </div>

        {/* Save Button */}

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition">
          Save Settings
        </button>

      </div>

    </main>
  );
}