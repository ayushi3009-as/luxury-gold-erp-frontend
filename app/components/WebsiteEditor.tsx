"use client";

import { useState } from "react";
import { getTenantWebsiteSettings, updateTenantWebsiteSettings } from "@/app/actions/tenant";
import { Store, Save, RefreshCw, CheckCircle, Search, Monitor, Smartphone, Tablet } from "lucide-react";

export default function WebsiteEditor() {
  const [subdomain, setSubdomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [settings, setSettings] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [previewKey, setPreviewKey] = useState(0); // Used to force refresh iframe

  const handleFetchSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subdomain.trim()) return;
    
    setLoading(true);
    setError("");
    
    try {
      // Clean subdomain (remove spaces, etc)
      const cleanSubdomain = subdomain.trim().toLowerCase();
      const res = await getTenantWebsiteSettings(cleanSubdomain);
      
      if (res.success && res.data) {
        setSettings(res.data);
        setIsEditing(true);
        setSubdomain(cleanSubdomain); // ensure clean version is kept
      } else {
        setError(res.error || "Tenant not found");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    setSaveSuccess(false);
    
    try {
      const res = await updateTenantWebsiteSettings(subdomain, settings);
      
      if (res.success) {
        setSaveSuccess(true);
        // Force iframe refresh to show new saved settings
        setPreviewKey(prev => prev + 1);
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        alert(res.error || "Failed to save settings");
      }
    } catch (err) {
      alert("An unexpected error occurred while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings((prev: any) => ({ ...prev, [name]: value }));
  };

  if (!isEditing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-background-secondary border border-border-theme p-8 rounded-xl w-full max-w-md shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center">
              <Store className="text-accent-gold" size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-serif text-text-primary text-center mb-2">Connect Store</h2>
          <p className="text-text-secondary text-center mb-8 text-sm">
            Enter the store's domain name to configure its website settings and view a live preview.
          </p>

          <form onSubmit={handleFetchSettings}>
            <div className="mb-6 relative">
              <label className="block text-sm text-text-secondary mb-2">Subdomain / Domain Prefix</label>
              <div className="flex items-center">
                <input 
                  type="text"
                  required
                  placeholder="e.g. ram"
                  className="w-full bg-background-tertiary border border-border-theme rounded-l-md py-3 px-4 text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value)}
                />
                <div className="bg-background-tertiary border border-l-0 border-border-theme rounded-r-md py-3 px-4 text-text-secondary whitespace-nowrap text-sm h-full">
                  .tivra.marketing
                </div>
              </div>
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-accent-gold text-black font-medium py-3 rounded-md flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? <RefreshCw className="animate-spin" size={18} /> : <Search size={18} />}
              {loading ? "Connecting..." : "Connect & Edit"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Pre-calculate iframe dimensions based on selected device
  const getPreviewClasses = () => {
    switch(previewDevice) {
      case "mobile": return "w-[375px] h-[812px]"; // iPhone 13 Pro
      case "tablet": return "w-[768px] h-[1024px]"; // iPad Mini
      default: return "w-full h-full"; // Desktop (fill container)
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      {/* Header Toolbar */}
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-border-theme">
        <div>
          <h2 className="text-xl font-serif text-text-primary">Theme Customizer</h2>
          <p className="text-sm text-text-secondary">Editing storefront: <span className="text-accent-gold font-medium">{subdomain}.tivra.marketing</span></p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Device Toggles */}
          <div className="flex items-center bg-background-tertiary rounded-md p-1 border border-border-theme">
            <button 
              onClick={() => setPreviewDevice("desktop")}
              className={`p-2 rounded ${previewDevice === "desktop" ? "bg-background-secondary shadow-sm text-accent-gold" : "text-text-secondary hover:text-text-primary"}`}
              title="Desktop Preview"
            >
              <Monitor size={16} />
            </button>
            <button 
              onClick={() => setPreviewDevice("tablet")}
              className={`p-2 rounded ${previewDevice === "tablet" ? "bg-background-secondary shadow-sm text-accent-gold" : "text-text-secondary hover:text-text-primary"}`}
              title="Tablet Preview"
            >
              <Tablet size={16} />
            </button>
            <button 
              onClick={() => setPreviewDevice("mobile")}
              className={`p-2 rounded ${previewDevice === "mobile" ? "bg-background-secondary shadow-sm text-accent-gold" : "text-text-secondary hover:text-text-primary"}`}
              title="Mobile Preview"
            >
              <Smartphone size={16} />
            </button>
          </div>
          
          <button 
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors border border-border-theme rounded-md"
          >
            Change Domain
          </button>
          <button 
            onClick={handleSaveSettings}
            disabled={isSaving}
            className={`flex items-center gap-2 px-6 py-2 rounded-md font-medium transition-all ${saveSuccess ? 'bg-green-600 text-white' : 'bg-accent-gold text-black hover:bg-white'}`}
          >
            {isSaving ? <RefreshCw className="animate-spin" size={16} /> : (saveSuccess ? <CheckCircle size={16} /> : <Save size={16} />)}
            {isSaving ? "Saving..." : (saveSuccess ? "Saved Successfully" : "Save Changes")}
          </button>
        </div>
      </div>

      {/* Main Split Screen */}
      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* Left Panel: Form Editor */}
        <div className="w-[350px] shrink-0 bg-background-secondary border border-border-theme rounded-lg overflow-y-auto custom-scrollbar">
          <div className="p-5 space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-accent-gold font-bold">Hero Section</h3>
              
              <div>
                <label className="block text-xs text-text-secondary mb-1">Hero Title</label>
                <input 
                  type="text" 
                  name="heroTitle"
                  value={settings.heroTitle || ""}
                  onChange={handleChange}
                  placeholder="e.g. Timeless Elegance"
                  className="w-full bg-background-tertiary border border-border-theme rounded-md py-2 px-3 text-sm text-text-primary focus:outline-none focus:border-accent-gold"
                />
              </div>
              
              <div>
                <label className="block text-xs text-text-secondary mb-1">Hero Subtitle</label>
                <textarea 
                  name="heroSubtitle"
                  value={settings.heroSubtitle || ""}
                  onChange={handleChange}
                  rows={2}
                  placeholder="e.g. Discover our exclusive collection of luxury jewelry."
                  className="w-full bg-background-tertiary border border-border-theme rounded-md py-2 px-3 text-sm text-text-primary focus:outline-none focus:border-accent-gold"
                />
              </div>
              
              <div>
                <label className="block text-xs text-text-secondary mb-1">Hero Background Image URL</label>
                <input 
                  type="text" 
                  name="heroImageUrl"
                  value={settings.heroImageUrl || ""}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full bg-background-tertiary border border-border-theme rounded-md py-2 px-3 text-sm text-text-primary focus:outline-none focus:border-accent-gold"
                />
                <p className="text-[10px] text-text-secondary mt-1">Leave blank to use the default luxury video background.</p>
              </div>
            </div>

            <div className="w-full h-px bg-border-theme"></div>

            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-accent-gold font-bold">About Section</h3>
              
              <div>
                <label className="block text-xs text-text-secondary mb-1">About Us Text</label>
                <textarea 
                  name="aboutUsText"
                  value={settings.aboutUsText || ""}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell your customers about your brand..."
                  className="w-full bg-background-tertiary border border-border-theme rounded-md py-2 px-3 text-sm text-text-primary focus:outline-none focus:border-accent-gold"
                />
              </div>
            </div>
            
            <div className="w-full h-px bg-border-theme"></div>

            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-accent-gold font-bold">Contact Info</h3>
              
              <div>
                <label className="block text-xs text-text-secondary mb-1">Support Email</label>
                <input 
                  type="email" 
                  name="contactEmail"
                  value={settings.contactEmail || ""}
                  onChange={handleChange}
                  className="w-full bg-background-tertiary border border-border-theme rounded-md py-2 px-3 text-sm text-text-primary focus:outline-none focus:border-accent-gold"
                />
              </div>
              
              <div>
                <label className="block text-xs text-text-secondary mb-1">Support Phone</label>
                <input 
                  type="text" 
                  name="contactPhone"
                  value={settings.contactPhone || ""}
                  onChange={handleChange}
                  className="w-full bg-background-tertiary border border-border-theme rounded-md py-2 px-3 text-sm text-text-primary focus:outline-none focus:border-accent-gold"
                />
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-accent-gold/10 border border-accent-gold/30 rounded-md">
              <p className="text-xs text-text-primary">
                <strong>Tip:</strong> Click "Save Changes" to apply these settings. The preview on the right will automatically refresh to show your latest saved changes.
              </p>
            </div>

          </div>
        </div>

        {/* Right Panel: Live Preview iframe */}
        <div className="flex-1 bg-black rounded-lg border border-border-theme flex items-center justify-center overflow-hidden relative">
          <div className="absolute top-2 left-4 z-10 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className={`bg-white transition-all duration-300 ease-in-out ${getPreviewClasses()} ${previewDevice !== "desktop" ? "border-8 border-gray-900 rounded-3xl overflow-hidden mt-8" : ""}`}>
             {/* We use a key to force re-render the iframe when changes are saved */}
             <iframe 
               key={previewKey}
               src={`http://${subdomain}.tivra.marketing:3000/`} // Note: Change to https in production if SSL is configured
               className="w-full h-full border-0"
               title="Live Store Preview"
             />
          </div>
        </div>
      </div>
    </div>
  );
}
