"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Mic, Paperclip, MicOff } from "lucide-react";

export default function ChatInput({ 
  onSendMessage, 
  disabled 
}: { 
  onSendMessage: (msg: string) => void, 
  disabled: boolean 
}) {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      
      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setMessage((prev) => prev + (prev ? " " : "") + transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const handleSend = () => {
    if (!message.trim() || disabled) return;
    onSendMessage(message);
    setMessage("");
  };

  const toggleListen = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        recognitionRef.current.start();
        setIsListening(true);
      } else {
        alert("Your browser does not support speech recognition.");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setMessage((prev) => `[File Attached: ${file.name}] ` + prev);
    }
  };

  return (
    <div className="mt-6 bg-background-secondary border border-border-theme rounded-2xl p-4">
      <div className="flex items-center gap-3">
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          onChange={handleFileChange} 
        />
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="p-3 rounded-xl bg-background-tertiary hover:bg-[#252525] transition" 
          disabled={disabled}
        >
          <Paperclip size={20} className="text-accent-gold" />
        </button>

        <input
          type="text"
          placeholder="Ask anything about your ERP..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          disabled={disabled}
          className="flex-1 bg-background-tertiary border border-gray-700 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-yellow-500 disabled:opacity-50"
        />

        <button 
          onClick={toggleListen}
          className={`p-3 rounded-xl transition ${isListening ? 'bg-red-500/20 text-red-500' : 'bg-background-tertiary hover:bg-[#252525] text-accent-gold'}`}
          disabled={disabled}
        >
          {isListening ? <MicOff size={20} /> : <Mic size={20} />}
        </button>

        <button
          onClick={handleSend}
          disabled={disabled}
          className="bg-accent-gold hover:bg-accent-gold-hover text-black p-3 rounded-xl transition disabled:opacity-50"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}