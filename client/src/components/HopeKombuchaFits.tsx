import { QuoteIcon } from "lucide-react";
import Button from "./ui/Button";
import image from "../assets/images/envato-labs-image-edit (72)_upscayl_4x_upscayl-standard-4x.webp";
import bgbottles from "../assets/images/bg/151999409_10512358.jpg"

const HopeKombuchaFits = () => {
  return (
    <div
      className="py-20 bg-[#f4c430] bg-gradient-to-tl from-[#f4c430] from-0% to-[#fdd017] to-[74%]"
      // style={{
      //   backgroundImage: "url('/src/assets/images/bg/pattern.svg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   opacity: 1,
      // }}
    >
      <div className="mx-auto container flex flex-col md:flex-row gap-6 px-4">
        <div
          className="relative mx-auto w-full md:w-2/3 z-10 px-6 md:px-20 py-8 md:py-6 pt-10 overflow-hidden"
          style={{
            backgroundImage: `url(${bgbottles})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: "60px",
            borderBottomRightRadius: "20px",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/90"></div>

          {/* Content */}
          <div className="relative z-10">
            <p className="text-xl md:text-3xl uppercase font-heading font-semibold leading-relaxed text-gray-800 max-w-full md:max-w-[90%]">
              <span className="underline underline-offset-14 decoration-brand-purple decoration-4 font-bold">
                Hope Kombucha
              </span>
            </p>

            <p className="text-xl md:text-3xl capitalize font-heading font-semibold leading-relaxed text-gray-800 max-w-full md:max-w-[90%] mt-4">
              fits seamlessly into modern lifestyles - at the gym, at work, at
              home, or in cafés.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
              <Button title="Enquire Now" href="#contact" variant="secondary" />
              <QuoteIcon size={60} className="text-[#611082]/90 md:w-20 md:h-20" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 h-64 md:h-auto">
          <div
            className="w-full h-full overflow-hidden"
            style={{
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "60px",
            }}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default HopeKombuchaFits;
