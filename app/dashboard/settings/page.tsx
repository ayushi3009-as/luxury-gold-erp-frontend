"use client";

import { useState, useEffect } from "react";
import { Save, Paintbrush, Globe, Store, Loader2 } from "lucide-react";

export default function StoreSettingsPage() {
  const [settings, setSettings] = useState({
    storeName: "",
    brandColor: "#e4b52d",
    tagline: "",
    heroImageUrl: ""
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/settings")
      .then(res => res.json())
      .then(data => {
        setSettings({
          storeName: data.storeName || "",
          brandColor: data.brandColor || "#e4b52d",
          tagline: data.tagline || "",
          heroImageUrl: data.heroImageUrl || ""
        });
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
        alert("Website Settings Updated Successfully! Visit your homepage to see the changes.");
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

  if (loading) {
    return <div className="flex h-96 items-center justify-center"><Loader2 className="animate-spin w-8 h-8 text-accent-gold" /></div>;
  }

  return (
    <div className="p-6 md:p-8 animate-fade-in max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-accent-gold mb-2">Website Settings</h1>
        <p className="text-text-secondary">Customize your E-Commerce Storefront's appearance and branding.</p>
      </div>

      <div className="space-y-8">
        
        {/* Basic Info */}
        <div className="bg-background-secondary border border-border-theme p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6 border-b border-border-theme pb-4">
            <Store className="text-accent-gold w-6 h-6" />
            <h2 className="text-xl font-semibold">Store Details</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-text-secondary mb-2">Store Name (Logo)</label>
              <input 
                type="text" 
                value={settings.storeName}
                onChange={e => setSettings({...settings, storeName: e.target.value})}
                placeholder="e.g. Sharma Jewellers"
                className="w-full bg-background-primary border border-border-theme rounded-md px-4 py-2 focus:border-accent-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-2">Homepage Tagline</label>
              <input 
                type="text" 
                value={settings.tagline}
                onChange={e => setSettings({...settings, tagline: e.target.value})}
                placeholder="e.g. Elegance that lasts forever"
                className="w-full bg-background-primary border border-border-theme rounded-md px-4 py-2 focus:border-accent-gold focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Branding */}
        <div className="bg-background-secondary border border-border-theme p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6 border-b border-border-theme pb-4">
            <Paintbrush className="text-accent-gold w-6 h-6" />
            <h2 className="text-xl font-semibold">Theme & Branding</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-text-secondary mb-2">Brand Primary Color</label>
              <div className="flex gap-4 items-center">
                <input 
                  type="color" 
                  value={settings.brandColor}
                  onChange={e => setSettings({...settings, brandColor: e.target.value})}
                  className="h-10 w-20 bg-background-primary border border-border-theme rounded cursor-pointer"
                />
                <span className="font-mono text-sm">{settings.brandColor}</span>
              </div>
              <p className="text-xs text-text-secondary mt-2">This color will be used for buttons and highlights on your website.</p>
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="bg-background-secondary border border-border-theme p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6 border-b border-border-theme pb-4">
            <Globe className="text-accent-gold w-6 h-6" />
            <h2 className="text-xl font-semibold">Hero Banner</h2>
          </div>
          
          <div>
            <label className="block text-sm text-text-secondary mb-2">Banner Image URL</label>
            <input 
              type="text" 
              value={settings.heroImageUrl}
              onChange={e => setSettings({...settings, heroImageUrl: e.target.value})}
              placeholder="https://images.unsplash.com/..."
              className="w-full bg-background-primary border border-border-theme rounded-md px-4 py-2 focus:border-accent-gold focus:outline-none"
            />
            {settings.heroImageUrl && (
              <div className="mt-4 aspect-video w-full max-w-md rounded-lg overflow-hidden border border-border-theme">
                <img src={settings.heroImageUrl} alt="Banner Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button 
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-accent-gold text-black px-8 py-3 rounded-md font-bold hover:bg-yellow-500 transition-colors disabled:opacity-70"
          >
            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            {saving ? "Saving..." : "Save Settings & Publish"}
          </button>
        </div>

      </div>
    </div>
  );
}
