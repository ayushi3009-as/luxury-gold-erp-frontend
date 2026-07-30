import AIHeader from "@/components/ai-assistant/AIHeader";
import SuggestedPrompts from "@/components/ai-assistant/SuggestedPrompts";
import ChatWindow from "@/components/ai-assistant/ChatWindow";
import ChatInput from "@/components/ai-assistant/ChatInput";


export default function AIAssistantPage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary p-8">

      {/* Header */}

      <AIHeader />

      {/* Main Content */}

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

        {/* Left Section */}

        <section className="xl:col-span-3">

          <SuggestedPrompts />

          <div className="mt-6">
            <ChatWindow />
          </div>

          <ChatInput />

        </section>

        {/* Right Sidebar */}

        <aside className="xl:col-span-1">
          
        </aside>

      </div>

    </main>
  );
}