import { useState, useEffect } from "react";
import hopelifelogo from "../assets/images/logo.png";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const navLinks = [ "Our Story", "Our Flavours", "Client Says", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all  duration-500 ease-in-out flex items-center justify-between px-6 lg:px-12 ${
        isScrolled || isMenuOpen
          ? "py-2 bg-white shadow-lg border-b border-white"
          : "py-6 lg:py-8 bg-transparent"
      }`}
    >
      <div className="text-white text-2xl bg-white rounded-full border border-gray-400 font-heading font-medium tracking-[0.2em] uppercase drop-shadow-md relative z-50">
        <img src={hopelifelogo} alt="Logo" width={100} />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className={` ${isScrolled ? "text-forest-green/80 font-bold hover:underline hover:underline-offset-8 hover:decoration-orange decoration-1" : "text-white/80 font-medium hover:underline hover:underline-offset-8 hover:decoration-white"} uppercase text-xs lg:text-sm tracking-[0.2em]  transition-colors `}
          >
            {item}
          </a>
        ))}

        <a
          href="#flavours"
          className={` ${isScrolled ? "text-white/80 py-3 font-bold bg-[#FF852C]" : "text-white/80 font-medium "} flex gap-2 rounded-full border border-gray-300 py-2 px-3 items-center max-w-fit uppercase text-xs lg:text-md tracking-[0.2em] `}
        >
           <Phone className="w-4 h-4" /> +91 72005 04628
        </a>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        className={`md:hidden relative z-50 ${isScrolled || isMenuOpen ? "text-forest-green/80 font-bold" : "text-white/80 font-medium "}`}
        aria-label="Menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 flex flex-col gap-4 px-6 md:hidden">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-forest-green/80 font-bold uppercase text-sm tracking-[0.2em] py-2 border-b border-gray-50 last:border-none"
            >
              {item}
            </a>
          ))}
          <a
            href="#flavours"
            onClick={() => setIsMenuOpen(false)}
            className="text-white/80 py-3 font-bold bg-[#FF852C] flex gap-2 rounded-full border border-gray-300 px-4 items-center max-w-fit uppercase text-xs tracking-[0.2em] mt-2"
          >
             <Phone className="w-4 h-4" /> +91 72005 04628
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
