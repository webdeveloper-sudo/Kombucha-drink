import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Send, 
  MessageSquare,
  Sparkles
} from "lucide-react";

// --- FAQ Data (Enhanced with Profile PDF) ---
const FAQ_RESPONSES: Record<string, string> = {
  benefits: "Hope Kombucha is a functional beverage that supports digestive wellness, provides natural refreshment, and helps reduce dependency on sugary soft drinks. It's naturally carbonated and brewed with a live SCOBY for authentic probiotic benefits.",
  ingredients: "Our primary ingredients are premium tea leaves, measured natural sugar (used only for fermentation), live SCOBY culture, and natural botanical infusions. No artificial colors or synthetic preservatives are ever used!",
  flavors: "We offer 7 secondary-fermented flavors: Hibiscus (floral), Turmeric (earthy), Ginger (zesty), Rose (petal-infused), Butterfly Pea, Mint (cooling), and our signature Elixir (smooth & mild).",
  pricing: "Individual 330ml glass bottles are ₹180. We also have a 6-pack Starter Pack for ₹990 and a 12-pack Wellness Case for ₹1800. Premium wellness, accessible price!",
  delivery: "We deliver across Pondicherry and Chennai. To maintain the delicate balance of our living beverage, we use cold-chain distribution to ensure it reaches you fresh within 24-48 hours.",
  founder: "Dr. Arawindhan J is our founder and visionary. He started Hope Kombucha in 2025 with a mission to blend traditional fermentation techniques with modern food safety systems.",
  craft: "Our 8-step craft process includes controlled tea brewing, primary fermentation with live SCOBY, secondary fermentation with natural flavors, and strict pH monitoring to ensure FSSAI-compliant quality.",
  storage: "Keep your kombucha refrigerated and away from direct sunlight. It's naturally effervescent and best served chilled. Maintain the cold chain for optimal freshness!",
  default: "I'm still learning about that! However, it might be in our core mission to nourish the body. Would you like to know about our ingredients, flavors, or our founder, Dr. Arawindhan?",
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Welcome to Hope Kombucha! I'm your Kombucha Buddy. Ask me about our flavors, the craft process, or how we brew wellness!" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user" as const, text }];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response = FAQ_RESPONSES.default;

      if (lowerText.includes("benefit") || lowerText.includes("good for") || lowerText.includes("health")) response = FAQ_RESPONSES.benefits;
      else if (lowerText.includes("flavor") || lowerText.includes("variant") || lowerText.includes("taste")) response = FAQ_RESPONSES.flavors;
      else if (lowerText.includes("ingredient") || lowerText.includes("made of") || lowerText.includes("sugar")) response = FAQ_RESPONSES.ingredients;
      else if (lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("buy")) response = FAQ_RESPONSES.pricing;
      else if (lowerText.includes("delivery") || lowerText.includes("ship") || lowerText.includes("chennai")) response = FAQ_RESPONSES.delivery;
      else if (lowerText.includes("founder") || lowerText.includes("who started") || lowerCareText(lowerText, "arawindhan")) response = FAQ_RESPONSES.founder;
      else if (lowerText.includes("craft") || lowerText.includes("how it's made") || lowerText.includes("process") || lowerText.includes("scoby")) response = FAQ_RESPONSES.craft;
      else if (lowerText.includes("store") || lowerText.includes("refrigerate") || lowerText.includes("keep")) response = FAQ_RESPONSES.storage;
      else if (lowerText.includes("contact") || lowerText.includes("support") || lowerText.includes("email")) response = FAQ_RESPONSES.contact;

      setMessages(prev => [...prev, { role: "bot", text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const lowerCareText = (input: string, target: string) => input.includes(target.toLowerCase());

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      
      {/* --- Chat Panel --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-[320px] sm:w-[380px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-4"
          >
            {/* Header */}
            <div className="bg-[#1B4D3E] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles size={20} className="text-[#FF852C]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg leading-tight">Kombucha Buddy</h3>
                  <p className="text-[10px] text-white/60 uppercase tracking-widest font-medium">Online • Health Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="h-[350px] overflow-y-auto p-4 space-y-4 bg-slate-50/50"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`
                    max-w-[80%] p-3 rounded-2xl text-sm font-body shadow-sm
                    ${msg.role === "user" 
                      ? "bg-[#1B4D3E] text-white rounded-br-none" 
                      : "bg-white text-gray-800 rounded-bl-none border border-gray-100"}
                  `}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me something..."
                  className="flex-grow bg-slate-100 border-none rounded-full py-2 px-4 text-sm focus:ring-2 focus:ring-[#FF852C] transition-all"
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 flex items-center justify-center bg-[#1B4D3E] text-white rounded-full hover:bg-opacity-90 disabled:opacity-50 transition-all shadow-md group"
                >
                  <Send size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Toggle FAB --- */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, rotate: isOpen ? -90 : 0 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all ${
          isOpen ? "bg-white text-[#1B4D3E]" : "bg-[#FF852C] text-white"
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#1B4D3E] border-2 border-white rounded-full flex items-center justify-center text-[10px] font-bold text-white">1</span>
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;
