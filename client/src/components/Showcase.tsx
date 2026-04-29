import { Globe, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import hopelifelogo from "../assets/images/logo.webp";
import kombuchatag from "../assets/images/Kombucha.webp";
import bg from "../assets/images/bg/all-drinks.webp"

const Showcase = () => {
  const links = [
    {
      name: "Website",
      url: "https://hopekombucha-agoc.netlify.app/",
      icon: <Globe className="w-6 h-6 text-gray-800" />,
      description: "Explore our premium living probiotic kombucha",
      gradient: "from-gold/10 via-white/40 to-gold/10",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/kombucha_hope_life/",
      icon: <Instagram className="w-6 h-6 text-rose-600" />,
      description: "Follow our story on Instagram",
      gradient: "from-rose-500/10 via-white/40 to-rose-500/10",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61585303814871",
      icon: <Facebook className="w-6 h-6 text-blue-600" />,
      description: "Join our community on Facebook",
      gradient: "from-blue-600/10 via-white/40 to-blue-600/10",
    },
  ];

  return (
    <div 
      className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,124,89,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,168,75,0.1)_0%,transparent_50%)]" />

      {/* Animated Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-64 h-64 bg-gold/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-[10%] blur"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-xl flex flex-col items-center bg-white/50 backdrop-blur-md rounded-md p-8 md:px-12 py-10 shadow-2xl border border-white/60">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-full"
        >
          <img
            src={hopelifelogo}
            alt="Hope Kombucha Logo"
            className="w-52 h-auto"
          />
        </motion.div>
        <div>
          <img src={kombuchatag} width={180} alt="" />
        </div>

        <div className="w-12 mt-2 h-px bg-gold/20" />

        {/* Title Section */}
        <h2
          className={`text-4xl lg:text-5xl font-heading font-semibold text-gray-800`}
        >
          <span className="font-bold italic">Connect with</span> Us
        </h2>
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-2 racking-tight">
            Connect with <span className="italic">Hope</span>
          </h1>
          <p className="text-text-dark/60 font-body text-sm lg:text-base tracking-wide max-w-xs mx-auto">
            Experience the harmony of nature's finest fermentation.
          </p>
        </motion.div> */}

        {/* Links Grid */}
        <div className="w-full flex flex-col gap-3 mt-8">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex items-center justify-between px-5 py-2 pt-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(27,77,62,0.08)] transition-all duration-300 w-full overflow-hidden`}
            >
              {/* Hover Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${link.gradient} translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out`}
              />

              <div className="flex md:flex-row flex-col items-start gap-4 relative z-10">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-50 flex items-center justify-center transition-transform duration-300 scale-150 group-hover:scale-160">
                  {link.icon}
                </div>
                <div className="text-left">
                  <span className="text-xl font-semibold text-gray-800 group-hover:text-gray-800-muted transition-colors">
                    {link.name}
                  </span>
                  <p className="text-sm text-gray-800 font-body">
                    {link.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 p-2 text-gray-800/30 group-hover:text-gray-800 transition-all duration-300 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex flex-col items-center gap-4 text-center"
        >
          <div className="w-12 h-px bg-gold/20" />
          <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-80 ">
            Crafted with Patience & Purpose
          </p>
        </motion.div>
      </div>

      {/* Aesthetic Accents */}
      <div className="fixed top-0 right-0 w-full h-1 bg-gradient-to-r from-gold via-gold to-gold opacity-30" />
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold to-gold opacity-30" />
    </div>
  );
};

export default Showcase;
