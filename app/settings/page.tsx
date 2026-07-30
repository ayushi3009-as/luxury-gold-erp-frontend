"use client";

import { Settings as SettingsIcon, Save, Store, Shield, Bell, Database } from "lucide-react";

export default function Settings() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary flex items-center gap-3">
            <SettingsIcon className="text-accent-gold" size={32} />
            System Settings
          </h1>
          <p className="text-text-secondary mt-1">Configure your ERP application settings.</p>
        </div>
        <button className="flex items-center gap-2 bg-accent-gold text-black px-6 py-2 rounded-md font-medium hover:bg-accent-gold">
          <Save size={18} />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1 space-y-2">
          {[
            { name: "General Settings", icon: Store, active: true },
            { name: "Security & Access", icon: Shield, active: false },
            { name: "Notifications", icon: Bell, active: false },
            { name: "Database Backup", icon: Database, active: false },
          ].map((item, idx) => (
            <button 
              key={idx} 
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active 
                ? "bg-background-tertiary text-accent-gold border border-border-theme" 
                : "text-text-secondary hover:bg-background-tertiary hover:text-accent-gold"
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 bg-background-secondary border border-border-theme rounded-xl p-8">
          <h2 className="text-xl font-semibold text-accent-gold mb-6 border-b border-border-theme pb-4">General Settings</h2>
          
          <div className="space-y-6 max-w-2xl">
            <div>
              <label className="block text-sm text-text-secondary mb-2">Store Name</label>
              <input 
                type="text" 
                defaultValue="Luxury Gold ERP"
                className="w-full bg-background-tertiary border border-border-theme rounded-md py-3 px-4 text-text-primary focus:outline-none focus:border-border-theme"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-text-secondary mb-2">Currency Symbol</label>
                <select className="w-full bg-background-tertiary border border-border-theme rounded-md py-3 px-4 text-text-primary focus:outline-none focus:border-border-theme">
                  <option>₹ (INR)</option>
                  <option>$ (USD)</option>
                  <option>€ (EUR)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-2">Timezone</label>
                <select className="w-full bg-background-tertiary border border-border-theme rounded-md py-3 px-4 text-text-primary focus:outline-none focus:border-border-theme">
                  <option>Asia/Kolkata (IST)</option>
                  <option>America/New_York (EST)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-text-secondary mb-2">Default Tax Rate (GST %)</label>
              <input 
                type="number" 
                defaultValue="3"
                className="w-full bg-background-tertiary border border-border-theme rounded-md py-3 px-4 text-text-primary focus:outline-none focus:border-border-theme"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
