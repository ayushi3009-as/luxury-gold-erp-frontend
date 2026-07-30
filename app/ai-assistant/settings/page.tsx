import { Bell, Bot, Globe, Moon, Shield } from "lucide-react";

export default function AISettingsPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-accent-gold">
          AI Settings
        </h1>

        <p className="text-text-secondary mt-2">
          Configure your AI Assistant preferences.
        </p>
      </div>

      <div className="space-y-6">

        {/* AI Model */}

        <div className="bg-background-secondary border border-border-theme rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <Bot className="text-accent-gold" size={24} />
            <h2 className="text-2xl font-semibold">
              AI Model
            </h2>
          </div>

          <select className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3">
            <option>Luxury Gold AI v1</option>
            <option>Luxury Gold AI v2</option>
            <option>GPT Integration</option>
          </select>

        </div>

        {/* Language */}

        <div className="bg-background-secondary border border-border-theme rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-accent-gold" size={24} />
            <h2 className="text-2xl font-semibold">
              Language
            </h2>
          </div>

          <select className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3">
            <option>English</option>
            <option>Hindi</option>
            <option>Gujarati</option>
          </select>

        </div>

        {/* Theme */}

        <div className="bg-background-secondary border border-border-theme rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <Moon className="text-accent-gold" size={24} />
            <h2 className="text-2xl font-semibold">
              Theme
            </h2>
          </div>

          <select className="w-full bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3">
            <option>Dark</option>
            <option>Light</option>
            <option>System Default</option>
          </select>

        </div>

        {/* Notifications */}

        <div className="bg-background-secondary border border-border-theme rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <Bell className="text-accent-gold" size={24} />
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

        <div className="bg-background-secondary border border-border-theme rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-accent-gold" size={24} />
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

        <button className="bg-accent-gold hover:bg-accent-gold-hover text-black font-semibold px-8 py-3 rounded-xl transition">
          Save Settings
        </button>

      </div>

    </main>
  );
}