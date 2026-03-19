import hopelifelogo from "../assets/images/logo.png";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-forest-green text-white pt-24 pb-12 overflow-hidden">
      {/* Ripped Edge SVG Mask/Overlay */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white overflow-hidden rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full fill-white"
        >
          <path d="M0,0 Q300,100 600,0 T1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Mission */}
          <div >
            <div className="bg-white rounded-full inline-block p-2 mb-3 border border-white/20 shadow-lg">
              <img
                src={hopelifelogo}
                alt="Hope Kombucha Logo"
                width={80}
                height={80}
              />
            </div>
            <p className="text-white/70 mb-6 font-body leading-relaxed max-w-xs">
              Crafting premium kombucha with traditional methods and modern
              wellness in mind. Every bottle is a promise of health and
              vitality.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#FF852C] hover:border-[#FF852C] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-2xl font-heading font-bold text-white tracking-wide">
              Explore
            </h4>
            <ul className="space-y-3 font-body text-white/70">
              {[
                "Shop",
                "Our Story",
                "Process",
                "Journal",
                "Faq",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-[#FF852C] text-white/70 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#FF852C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-2xl text-white font-heading font-bold tracking-wide">
              Get in Touch
            </h4>
            <ul className="space-y-4 font-body text-white/70">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#FF852C] hover:border-[#FF852C] transition-all duration-300 transform hover:-translate-y-1">
                  <MapPin className="w-10 h-5" />
                </div>
                <span>123 Wellness Blvd, Green Valley, CA 90210</span>
              </li>

              <li className="flex gap-4 items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#FF852C] hover:border-[#FF852C] transition-all duration-300 transform hover:-translate-y-1">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 90000 00000</span>
              </li>

              <li className="flex gap-4 items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#FF852C] hover:border-[#FF852C] transition-all duration-300 transform hover:-translate-y-1">
                  <Mail className="w-10 h-5" />
                </div>
                <span>hello@hopekombucha.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-2xl text-white font-heading font-bold tracking-wide">
              Stay Updated
            </h4>
            <p className="text-white/70 font-body text-sm">
              Subscribe to get wellness tips and exclusive flavour releases.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF852C] focus:bg-white/20 transition-all placeholder:text-white/40"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 w-10 h-10 flex items-center justify-center bg-[#FF852C] text-white rounded-full hover:bg-[#ff9a52] transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white text-xs font-body tracking-wider uppercase">
          <p className="text-gray-200">
            © {currentYear} Hope Kombucha. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="hover:text-white text-gray-200 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white text-gray-200 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Subtle organic background decoration */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#FF852C] opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
};

export default Footer;
