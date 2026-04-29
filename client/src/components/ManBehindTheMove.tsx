import { QuoteIcon } from "lucide-react";
import Heading from "./ui/Heading";
import leaficon from "../assets/icons/monstera.png";

const ManBehindTheMove = () => {
  return (
    <section
      className="py-20 bg-white"
      // style={{
      //   backgroundImage: "url('/src/assets/images/bg/pattern.svg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "repeat-y",
      //   opacity: 1,
      // }}
    >
      <div className="container mx-auto">
        <Heading
          title1="The Man"
          title2="Behind the Move"
          subtitle="Discover"
          textAlignment="center"
          titleColor="text-gray-800"
          subtitleColor="text-gray-800"
        />
        <div
          className=" bg-[#f4c430] bg-gradient-to-tl from-[#f4c430] from-0% to-[#fdd017] to-[74%] md:max-w-7xl max-w-full mx-auto z-10 md:px-20 px-10 py-6 pt-8"
          style={{
            borderTopLeftRadius: "120px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "120px",
            borderTopRightRadius: "0px",
          }}
        >
          
          {/* Content Section */}
          <div className="text-lg md:text-[18px] text-gray space-y-8 font-body leading-[1.85] drop-shadow-md">
            <ul className="space-y-4 mb-4 font-body text-[1.15rem] mx-auto max-w-4xl text-gray-800">
            <div className="text-center md:text-left mb-10 mt-5 uppercase font-heading font-semibold leading-relaxed text-gray-800 max-w-full md:max-w-[90%]">
              <span className="text-2xl md:text-4xl font-bold block">Dr. Arawindhan J</span>
              <p
                className={`text-gray-800 uppercase text-xs md:text-sm tracking-[0.3em] font-medium mt-2`}
              >
                Founder & Visionary - Hope Kombucha
              </p>
            </div>

              <li className="flex items-start">
                <img
                  src={leaficon}
                  alt=""
                  className="mr-4 mt-2 w-9 h-9 rounded-full bg-[#611082] p-1 flex-shrink-0"
                />
                <span className="pt-2">
                  {" "}
                  Hope Kombucha was founded in 2021 by{" "}
                  <span className="font-bold text-gray-800 underline underline-offset-6 decoration-brand-purple decoration-2">
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
                  className="mr-4 mt-2 w-9 h-9 rounded-full bg-[#611082] p-1 flex-shrink-0"
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
                  className="mr-4 mt-2 w-9 h-9 rounded-full bg-[#611082] p-1 flex-shrink-0"
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

          <QuoteIcon size={80} className="text-[#611082]/90 ms-auto mb-2" />
        </div>
      </div>
    </section>
  );
};

export default ManBehindTheMove;
