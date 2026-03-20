import { QuoteIcon } from "lucide-react";
import Heading from "./ui/Heading";
import leaficon from "../assets/icons/monstera.png";

const ManBehindTheMove = () => {
  return (
    <section
      className="py-20"
      style={{
        backgroundImage: "url('/src/assets/images/bg/pattern.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat-y",
        opacity: 1,
      }}
    >
      <div className="container mx-auto">
        <Heading
          title1="The Man"
          title2="Behind the Move"
          subtitle="Discover"
          textAlignment="center"
          titleColor="text-forest-green"
          subtitleColor="text-white"
        />
        <div
          className="bg-forest-green max-w-7xl mx-auto z-10 px-20 py-6 pt-8"
          style={{
            borderTopLeftRadius: "120px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "120px",
            borderTopRightRadius: "0px",
          }}
        >
          <p className="text-xl text-center md:text-4xl mb-10 mt-5 uppercase font-heading font-semibold leading-relaxed text-white/90 max-w-[90%]">
            <span className=" font-bold">Dr. Arawindhan J</span>
            <p
              className={`text-white/80 uppercase text-sm tracking-[0.3em] font-medium mb-3`}
            >
              Founder & Visionary - Hope Kombucha
            </p>
          </p>
          {/* Content Section */}
          <div className="text-lg md:text-[18px] text-white/90 space-y-8 font-body leading-[1.85] drop-shadow-md">
            <ul className="space-y-4 mb-4 font-body text-[1.15rem] mx-auto max-w-4xl text-white/90">
              <li className="flex items-start">
                <img
                  src={leaficon}
                  alt=""
                  className="mr-4 mt-2 w-9 h-9 rounded-full bg-[#FF852C] p-1 flex-shrink-0"
                />
                <span className="pt-2">
                  {" "}
                  Hope Kombucha was founded in 2025 by{" "}
                  <span className="font-bold text-white underline underline-offset-6 decoration-orange decoration-2">
                    Dr. Arawindhan J
                  </span>{" "}
                  with a clear belief - India deserves a safer, smarter
                  alternative to sugary beverages.
                </span>
              </li>
              <li className="flex items-start">
                <img
                  src={leaficon}
                  alt=""
                  className="mr-4 mt-2 w-9 h-9 rounded-full bg-[#FF852C] p-1 flex-shrink-0"
                />
                <span className="pt-2">
                  {" "}
                  Driven by a passion for functional wellness and clean-label
                  nutrition, he set out to blend traditional fermentation
                  science with modern food safety systems.
                </span>
              </li>
              <li className="flex items-center">
                <img
                  src={leaficon}
                  alt=""
                  className="mr-4 mt-2 w-9 h-9 rounded-full bg-[#FF852C] p-1 flex-shrink-0"
                />
                <span className="pt-2">
                  {" "}
                  What began as a vision to create a probiotic-rich,
                  gut-friendly beverage has evolved into a structured,
                  FSSAI-compliant brand focused on quality, scalability, and
                  national expansion.
                </span>
              </li>
            </ul>

            <div className="pt-10 text-center  px-4 w-full flex justify-center">
              <p
                className="text-[26px] md:text-[32px] md:leading-[1.4] font-heading text-[#3E3224] italic tracking-wide font-bold relative px-8 py-8 w-full  mx-auto lg:max-w-4xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/60 bg-white rounded-2xl transform hover:scale-[1.02] transition-transform duration-500"
                style={{
                  borderTopLeftRadius: "60px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "60px",
                  borderTopRightRadius: "0px",
                }}
              >
                “ Health is not a trend. It is a daily choice.{" "}
                <span>
                  <br />
                </span>{" "}
                And that choice should taste good. ”
              </p>
            </div>
          </div>

          <QuoteIcon size={80} className="text-[#FF852C]/90 ms-auto mb-2" />
        </div>
      </div>
    </section>
  );
};

export default ManBehindTheMove;
