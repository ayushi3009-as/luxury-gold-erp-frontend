"use client";

import { useState, useEffect } from "react";
import { Save, Paintbrush, Globe, Store, Loader2, Type, LayoutTemplate } from "lucide-react";

export default function StoreSettingsPage() {
  const [settings, setSettings] = useState({
    storeName: "",
    aboutUsText: "",
    logoUrl: "",
    themeSettings: {
      primaryColor: "#B08A57",
      backgroundColor: "#FFFDF9",
      textColor: "#0B1324",
      typography: "playfair",
      heroImageUrl: "",
      heroHeadline: "",
      heroSubheadline: ""
    }
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/settings")
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setSettings(data);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings)
      });
      if (res.ok) {
        alert("Website Settings Updated Successfully! Visit your storefront to see the changes.");
      } else {
        alert("Failed to update settings.");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving settings.");
    } finally {
      setSaving(false);
    }
  };

  const updateTheme = (key: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      themeSettings: {
        ...prev.themeSettings,
        [key]: value
      }
    }));
  };

  if (loading) {
    return <div className="flex h-96 items-center justify-center"><Loader2 className="animate-spin w-8 h-8 text-accent-gold" /></div>;
  }

  return (
    <div className="p-6 md:p-8 animate-fade-in max-w-5xl mx-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-accent-gold mb-2">Website Settings</h1>
          <p className="text-text-secondary">Customize your E-Commerce Storefront's appearance and branding.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-accent-gold text-black px-8 py-3 rounded-md font-bold hover:bg-yellow-500 transition-colors disabled:opacity-70"
        >
          {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
          {saving ? "Saving..." : "Save & Publish"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Forms */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* General */}
          <div className="bg-background-secondary border border-border-theme p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-6 border-b border-border-theme pb-4">
              <Store className="text-accent-gold w-6 h-6" />
              <h2 className="text-xl font-semibold">General Information</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-text-secondary mb-2">Store Name</label>
                <input 
                  type="text" 
                  value={settings.storeName}
                  onChange={e => setSettings({...settings, storeName: e.target.value})}
                  className="w-full bg-background-primary border border-border-theme rounded-md px-4 py-3 focus:border-accent-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-2">About Us / Footer Text</label>
                <textarea 
                  rows={3}
                  value={settings.aboutUsText}
                  onChange={e => setSettings({...settings, aboutUsText: e.target.value})}
                  className="w-full bg-background-primary border border-border-theme rounded-md px-4 py-3 focus:border-accent-gold focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Branding */}
          <div className="bg-background-secondary border border-border-theme p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-6 border-b border-border-theme pb-4">
              <Paintbrush className="text-accent-gold w-6 h-6" />
              <h2 className="text-xl font-semibold">Theme & Colors</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-text-secondary mb-2">Primary Color (Accent)</label>
                <div className="flex gap-4 items-center">
                  <input 
                    type="color" 
                    value={settings.themeSettings.primaryColor}
                    onChange={e => updateTheme("primaryColor", e.target.value)}
                    className="h-12 w-24 bg-background-primary border border-border-theme rounded cursor-pointer"
                  />
                  <span className="font-mono text-sm">{settings.themeSettings.primaryColor}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-2">Background Color</label>
                <div className="flex gap-4 items-center">
                  <input 
                    type="color" 
                    value={settings.themeSettings.backgroundColor}
                    onChange={e => updateTheme("backgroundColor", e.target.value)}
                    className="h-12 w-24 bg-background-primary border border-border-theme rounded cursor-pointer"
                  />
                  <span className="font-mono text-sm">{settings.themeSettings.backgroundColor}</span>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm text-text-secondary mb-2">Text Color</label>
                <div className="flex gap-4 items-center">
                  <input 
                    type="color" 
                    value={settings.themeSettings.textColor || "#0B1324"}
                    onChange={e => updateTheme("textColor", e.target.value)}
                    className="h-12 w-24 bg-background-primary border border-border-theme rounded cursor-pointer"
                  />
                  <span className="font-mono text-sm">{settings.themeSettings.textColor || "#0B1324"}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-border-theme pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Type className="text-accent-gold w-5 h-5" />
                <h3 className="text-lg font-medium">Typography</h3>
              </div>
              <div className="flex gap-4">
                {['playfair', 'inter', 'roboto'].map(font => (
                  <label key={font} className={`flex-1 border rounded-lg p-4 cursor-pointer text-center capitalize transition-colors ${settings.themeSettings.typography === font ? 'border-accent-gold bg-accent-gold/10' : 'border-border-theme hover:border-gray-500'}`}>
                    <input 
                      type="radio" 
                      name="typography" 
                      value={font}
                      checked={settings.themeSettings.typography === font}
                      onChange={e => updateTheme("typography", e.target.value)}
                      className="hidden"
                    />
                    {font}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Banner */}
          <div className="bg-background-secondary border border-border-theme p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-6 border-b border-border-theme pb-4">
              <Globe className="text-accent-gold w-6 h-6" />
              <h2 className="text-xl font-semibold">Hero Banner</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-text-secondary mb-2">Banner Image URL</label>
                <input 
                  type="text" 
                  value={settings.themeSettings.heroImageUrl}
                  onChange={e => updateTheme("heroImageUrl", e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-background-primary border border-border-theme rounded-md px-4 py-3 focus:border-accent-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-2">Headline</label>
                <input 
                  type="text" 
                  value={settings.themeSettings.heroHeadline}
                  onChange={e => updateTheme("heroHeadline", e.target.value)}
                  className="w-full text-xl bg-background-primary border border-border-theme rounded-md px-4 py-3 focus:border-accent-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-2">Sub-headline</label>
                <input 
                  type="text" 
                  value={settings.themeSettings.heroSubheadline}
                  onChange={e => updateTheme("heroSubheadline", e.target.value)}
                  className="w-full bg-background-primary border border-border-theme rounded-md px-4 py-3 focus:border-accent-gold focus:outline-none"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Live Preview */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 bg-background-secondary border border-border-theme rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-[#1A1A1A] px-4 py-3 border-b border-border-theme flex items-center gap-2">
              <LayoutTemplate className="w-4 h-4 text-accent-gold" />
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">Live Preview</span>
            </div>
            
            <div 
              className="h-[600px] relative overflow-hidden flex flex-col"
              style={{ backgroundColor: settings.themeSettings.backgroundColor }}
            >
              {/* Fake Navbar */}
              <div className="p-4 flex justify-center border-b shrink-0" style={{ borderColor: `${settings.themeSettings.textColor || '#000'}20` }}>
                <span 
                  className="text-lg font-bold tracking-[0.2em] uppercase"
                  style={{ color: settings.themeSettings.primaryColor }}
                >
                  {settings.storeName || "Brand Name"}
                </span>
              </div>

              {/* Fake Hero */}
              <div className="relative flex-1 flex flex-col items-center justify-center p-6 text-center">
                {settings.themeSettings.heroImageUrl && (
                  <div className="absolute inset-0 z-0">
                    <img src={settings.themeSettings.heroImageUrl} className="w-full h-full object-cover opacity-50" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                )}
                
                <div className="relative z-10 w-full" style={{ color: settings.themeSettings.textColor || '#000' }}>
                  <h2 
                    className="text-2xl mb-3 font-semibold shadow-sm"
                  >
                    {settings.themeSettings.heroHeadline || "Your Headline Here"}
                  </h2>
                  <p className="text-xs mb-6 opacity-80">
                    {settings.themeSettings.heroSubheadline || "Add a captivating subheadline to engage your visitors."}
                  </p>
                  <button 
                    className="px-6 py-2 text-xs uppercase tracking-widest font-bold"
                    style={{ backgroundColor: settings.themeSettings.primaryColor, color: settings.themeSettings.backgroundColor }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
