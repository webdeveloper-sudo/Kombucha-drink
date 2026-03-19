import { useState, useEffect } from "react";
import hopelifelogo from "../assets/images/logo.png";
import { ArrowRight, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all  duration-500 ease-in-out flex items-center justify-between px-6 lg:px-12 ${
        isScrolled
          ? "py-2 bg-white shadow-lg border-b border-white"
          : "py-6 lg:py-8 bg-transparent"
      }`}
    >
      <div className="text-white text-2xl bg-white rounded-full border border-gray-400 font-heading font-medium tracking-[0.2em] uppercase drop-shadow-md">
        <img src={hopelifelogo} alt="Logo" width={100} />
      </div>
      <nav className="hidden md:flex items-center gap-8">
        {["Shop", "Our Story", "Process", "Journal"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className={` ${isScrolled ? "text-forest-green/80 font-bold" : "text-white/80 font-medium "} hover:text-white uppercase text-xs lg:text-sm tracking-[0.2em]  transition-colors `}
          >
            {item}
          </a>
        ))}

        <a
          href="#flavours"
          className={` ${isScrolled ? "text-white/80 py-3 font-bold bg-[#FF852C]" : "text-white/80 font-medium "} flex gap-2 rounded-full border border-gray-300 py-2 px-3 items-center max-w-fit uppercase text-xs lg:text-md tracking-[0.2em] `}
        >
           <Phone /> +91 9000000000
        </a>
      </nav>
      {/* Mobile Menu Icon */}
      <button
        className={`md:hidden ${isScrolled ? "text-forest-green/80 font-bold" : "text-white/80 font-medium "}`}
        aria-label="Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
