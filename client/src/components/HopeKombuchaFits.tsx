import { QuoteIcon } from "lucide-react";
import Button from "./ui/Button";

const HopeKombuchaFits = () => {
  return (
    <div
      className="py-20 bg-white"
      // style={{
      //   backgroundImage: "url('/src/assets/images/bg/pattern.svg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   opacity: 1,
      // }}
    >
      <div
        className="bg-light-gray max-w-5xl mx-auto z-10 px-20 py-6 pt-8"
        style={{
          borderTopLeftRadius: "60px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "60px",
          borderTopRightRadius: "0px",
        }}
      >
        <p className="text-xl md:text-3xl uppercase font-heading font-semibold leading-relaxed text-gray-800 max-w-[90%]">
          <span className="underline underline-offset-14 decoration-brand-purple decoration-4 font-bold">
          Hope Kombucha
          </span>
        </p>
        <p className="text-xl md:text-3xl capitalize font-heading font-semibold leading-relaxed text-gray-800 max-w-[90%]">
        
          fits seamlessly into modern lifestyles - at the gym, at work, at home,
          or in cafés.
        </p>
      <div className="flex items-center justify-between py-2">
        <Button title="Enquire Now" href="#contact" variant="secondary" />
        <QuoteIcon size={80} className="text-[#611082]/90 " />
      </div>
      </div>
    </div>
  );
};

export default HopeKombuchaFits;
