import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-24 right-6 z-[9999]">
      <motion.a
        href="https://wa.me/917200504628"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow relative group"
      >
        <Phone size={24} fill="currentColor" />
        <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-bold py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
