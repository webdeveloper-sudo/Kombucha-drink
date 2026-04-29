import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "./ui/Heading";
import leaficon from "../assets/icons/monstera.png";

const Contact = () => {
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzlmuC5TMseUXDa0P2wSnx0Ju76cgHvRmqWuUovXFwog23OImyGAEa34oviC9pQUQM/exec"; // IMPORTANT: Replace this after deploying the Google Apps Script

  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as Record<string, string>).toString(),
      });

      if (response.ok) {
        setStatus("success");
        setShowSuccessPopup(true);
        setFormData({ name: "", email: "", mobile: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
        setTimeout(() => setShowSuccessPopup(false), 5000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="relative py-24 bg-[#FAF8F5] overflow-hidden">
      {/* Background Decor */}
      {/* <img
        src={flower}
        alt=""
        className="absolute top-0 right-0 w-1/3 opacity-10 pointer-events-none transform -scale-x-100 rotate-180"
      /> */}

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left Side: Contact Form and Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <Heading
            title1="Get"
            title2="In Touch"
            subtitle="Connect"
            textAlignment="left"
            titleColor="text-gray-800"
            subtitleColor="text-gray-800"
          />

          <p className="text-gray-600 text-lg font-body mb-10 mt-2">
            Whether you have a question about our flavors, wholesale inquiries,
            or just want to explore a healthier lifestyle, we'd love to hear
            from you.
          </p>

          {/* Contact Details Grid */}
          <div className="flex flex-col gap-3 mb-10 pl-2">
          

            <div
              className="flex items-center gap-6 group bg-gold px-8 py-4"
              style={{
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "30px",
                borderTopRightRadius: "0px",
              }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-purple text-white group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shadow-sm">
                <Phone size={26} />
              </div>
              <div>
                <h4 className="text-gray-800 font-bold text-xl font-heading mb-1">
                  Enquire Us
                </h4>
                <span className="text-gray-800  font-body text-md">
                  +91 72005 04628
                </span>
              </div>
            </div>

            <div
              className="flex items-center gap-6 group bg-gold px-8 py-4"
              style={{
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "30px",
                borderTopRightRadius: "0px",
              }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-purple text-white group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shadow-sm">
                <Mail size={26} />
              </div>
              <div>
                <h4 className="text-gray-800 font-bold text-xl font-heading mb-1">
                   Enquire Us
                </h4>
                <span className="text-gray-800  font-body text-md">
                  vp.expansions@hopemarket.in
                </span>
              </div>
            </div>
              <div
              className="flex items-center gap-6 group bg-gold px-8 py-4"
              style={{
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "30px",
                borderTopRightRadius: "0px",
              }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-purple text-white group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shadow-sm">
                <MapPin size={26} />
              </div>
              <div>
                <h4 className="text-gray-800 font-bold text-xl font-heading mb-1">
                  Reach Us
                </h4>
                <span className="text-gray-800  font-body text-md">
                  Marie Oulgaret, Auroville Road, Pondicherry - 605111, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form Card & Decorative Image */}
        <div className="w-full lg:w-1/2 ">
          {/* The Contact Form Container */}
          <div
            className="bg-[#FAF8F5] border border-light-gray w-full p-8 sm:p-10 shadow-xl relative z-20"
            style={{
              borderTopLeftRadius: "60px",
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "60px",
              borderTopRightRadius: "0px",
            }}
          >
            <h3 className="text-3xl font-heading font-bold text-gray-800 mb-8 flex items-center gap-3">
              <img
                src={leaficon}
                className="w-8 h-8 rounded-full bg-brand-purple p-1"
                alt="leaf icon"
              />
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-body">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-gray-400 text-gray-800 placeholder-gray-600 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:bg-white/15 transition-all outline-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full bg-white/10 border border-gray-400 text-gray-800 placeholder-gray-600 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:bg-white/15 transition-all outline-none"
                />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="Your Mobile"
                  className="w-full bg-white/10 border border-gray-400 text-gray-800 placeholder-gray-600 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:bg-white/15 transition-all outline-none"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-white/10 border border-gray-400 text-gray-800 placeholder-gray-600 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:bg-white/15 transition-all resize-none outline-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === "submitting"}
                className={`group flex items-center justify-center gap-3 uppercase text-sm lg:text-[14px] tracking-[0.2em] rounded-full text-white font-medium px-6 py-3.5 transition-all duration-300 ${
                  status === "success" ? "bg-green-600" :
                  status === "error" ? "bg-red-600" : 
                  "bg-brand-purple hover:bg-brand-purple/90"
                } disabled:opacity-70`}
              >
                {status === "idle" && (
                  <>
                    Submit Now
                    <Send size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                {status === "submitting" && (
                  <>
                    Sending...
                    <Loader2 size={20} className="animate-spin" />
                  </>
                )}
                {status === "success" && (
                  <>
                    Sent Successfully
                    <CheckCircle2 size={20} />
                  </>
                )}
                {status === "error" && (
                  <>
                    Failed to Send
                    <AlertCircle size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Decorative Packging Image floating behind */}
          {/* <img 
            src={packaging} 
            className="absolute -top-16 -right-12 w-3/4 max-w-[350px] object-contain -z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] opacity-90 hidden md:block"
            alt="Products Background" 
          /> */}
        </div>
      </div>

      {/* Success Popup Modal */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[2rem] p-8 md:p-12 max-w-md w-full text-center relative shadow-2xl flex flex-col items-center border border-gray-100"
            >
              <button 
                onClick={() => setShowSuccessPopup(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors bg-gold rounded-full p-2"
              >
                <X size={20} />
              </button>
              
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <CheckCircle2 size={48} className="text-green-500" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-800 mb-3">Message Sent!</h3>
              <p className="text-gray-600 font-body text-md leading-relaxed mb-8">
                Thank you for reaching out to Hope Kombucha. We've received your message and will get back to you shortly.
              </p>
              
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="bg-brand-purple text-white px-8 py-3.5 rounded-full font-medium tracking-widest uppercase text-sm hover:bg-brand-purple/90 transition-colors w-full shadow-md"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
