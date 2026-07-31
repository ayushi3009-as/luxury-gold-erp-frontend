"use client";

import { useState } from "react";
import { Globe, Image as ImageIcon, Layout, Save, UploadCloud } from "lucide-react";

export default function WebsiteSettingsPage() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate save
    setTimeout(() => setIsSaving(false), 1500);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary flex items-center gap-3">
            <Globe className="text-accent-gold" size={32} />
            Website & E-Commerce Settings
          </h1>
          <p className="text-text-secondary mt-2">Manage your B2C storefront, banners, and store information.</p>
        </div>
        <button 
          onClick={handleSave}
          className="bg-accent-gold text-black px-6 py-2.5 rounded-xl font-semibold hover:bg-accent-gold-hover transition-colors flex items-center gap-2 shadow-lg shadow-amber-500/20"
        >
          {isSaving ? "Saving..." : <><Save size={20} /> Save Changes</>}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Forms */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Hero Section Settings */}
          <div className="bg-background-secondary border border-border-theme p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-text-primary flex items-center gap-2 mb-6">
              <Layout className="text-accent-gold" size={20} />
              Landing Page Hero Section
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Hero Title (Main Headline)</label>
                <input 
                  type="text" 
                  defaultValue="Elegance Curated for Eternity"
                  className="w-full bg-background-primary border border-border-theme rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Hero Subtitle</label>
                <textarea 
                  rows={2}
                  defaultValue="Discover our exclusive collection of handcrafted 22K gold and IF-grade diamond masterpieces."
                  className="w-full bg-background-primary border border-border-theme rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Hero Background Image</label>
                <div className="border-2 border-dashed border-border-theme rounded-xl p-8 text-center hover:border-accent-gold hover:bg-accent-gold/5 transition-colors cursor-pointer group">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="p-3 bg-background-tertiary rounded-full group-hover:bg-accent-gold/20 transition-colors">
                      <ImageIcon className="text-text-secondary group-hover:text-accent-gold" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-text-primary font-medium">Click to upload banner image</p>
                      <p className="text-xs text-text-secondary mt-1">Recommended size: 1920x1080px (JPG, PNG)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & About Settings */}
          <div className="bg-background-secondary border border-border-theme p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-text-primary mb-6">Store Information</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Contact Phone</label>
                <input type="text" defaultValue="+91 98765 43210" className="w-full bg-background-primary border border-border-theme rounded-xl px-4 py-3 text-text-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">Contact Email</label>
                <input type="email" defaultValue="support@luxurygold.com" className="w-full bg-background-primary border border-border-theme rounded-xl px-4 py-3 text-text-primary" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">About Us (Footer Text)</label>
              <textarea 
                rows={3}
                defaultValue="Crafting timeless masterpieces since 1995. We bring you the finest purity of 22K gold and internationally certified diamonds."
                className="w-full bg-background-primary border border-border-theme rounded-xl px-4 py-3 text-text-primary"
              />
            </div>
          </div>

        </div>

        {/* Right Column: Tips & Preview */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#111] to-[#222] border border-accent-gold/30 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Globe size={100} /></div>
            <h3 className="text-lg font-bold text-accent-gold mb-3 relative z-10">Live on the Web!</h3>
            <p className="text-sm text-white/70 mb-6 relative z-10">Your storefront is currently active on your designated subdomain. Changes made here will reflect instantly to your customers.</p>
            <a href="#" className="inline-block text-center w-full bg-white/10 hover:bg-accent-gold text-white hover:text-black font-semibold px-4 py-2.5 rounded-lg transition-colors border border-white/20 relative z-10">
              View Live Storefront
            </a>
          </div>

          <div className="bg-background-secondary border border-border-theme p-6 rounded-2xl">
            <h3 className="font-semibold text-text-primary mb-3">Adding Products to Website</h3>
            <p className="text-sm text-text-secondary mb-4">
              To show a piece of jewelry on your B2C website, go to the <strong>Inventory</strong> section, edit the product, and turn on the <span className="font-semibold text-text-primary">"Show on Website"</span> toggle.
            </p>
            <div className="p-4 bg-background-tertiary rounded-xl border border-border-theme flex items-center justify-between">
              <span className="text-sm font-medium text-text-primary">Show on Website</span>
              <div className="w-10 h-6 bg-accent-gold rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
