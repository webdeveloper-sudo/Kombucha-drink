import { QuoteIcon } from "lucide-react";
import Heading from "./ui/Heading";
import leaficon from "../assets/icons/monstera.png";
import bgbottle from "../assets/images/bg/ginger-mint-lemon.webp";
import drImage from "../assets/images/Dr.-J.arawindhan.webp";

const ManBehindTheMove = () => {
  return (
    <section
      className="py-20 relative overflow-hidden bg-[#f4c430] bg-gradient-to-tl from-[#f4c430] from-0% to-[#fdd017] to-[74%]"
    >
      <div className="container mx-auto">
        <div
          className="relative mx-auto container py-12 overflow-hidden z-10 md:px-20 px-6"
          style={{
            backgroundImage: `url(${bgbottle})`,
            backgroundPosition: "center",
            borderTopLeftRadius: "60px",
            borderBottomRightRadius: "60px",
          }}
        >
          {/* Overlay (controls transparency) */}
          <div className="absolute inset-0 bg-white/76"></div>

          {/* Content */}
          <div className="relative z-10">
            <Heading
              title1="The Man"
              title2="Behind the Move"
              subtitle="Discover"
              textAlignment="center"
              titleColor="text-gray-800"
              subtitleColor="text-gray-800"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-16 items-start">
              {/* Left Column: Image & Bio Title */}
              <div className="flex flex-col items-center lg:items-end">
                <div className="relative group max-w-[320px] sm:max-w-[450px] lg:max-w-[600px] w-full">
                  {/* Decorative Glow */}
                  <div className="absolute inset-0 bg-[#611082]/10 rounded-2xl blur-3xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                  
                  {/* Image Container */}
                  <div className="relative z-10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[8px] md:border-[12px] border-white/80 backdrop-blur-sm"
                    style={{
                      borderTopLeftRadius: "60px",
                      borderBottomRightRadius: "60px",
                    }}
                  >
                    <img
                      src={drImage}
                      alt="Dr. Arawindan J - Founder"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Dark Gradient Overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                    {/* Name and Title Overlay (Bottom Left) */}
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-left uppercase font-heading text-white">
                      <span className="text-xl md:text-3xl font-bold block tracking-tight drop-shadow-md">
                        Dr. Arawindan J
                      </span>
                      <p className="text-white/90 uppercase text-[10px] md:text-xs tracking-[0.2em] font-medium mt-1 md:mt-2 drop-shadow-md">
                        Founder & Visionary
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Beliefs & Story */}
              <div className="flex flex-col justify-center pt-4">
                <ul className="space-y-8 font-body text-[1.1rem] md:text-[1.2rem] text-gray-800 leading-relaxed">
                  <li className="flex items-start group">
                    <img
                      src={leaficon}
                      alt=""
                      className="mr-5 mt-1 w-10 h-10 rounded-full bg-[#611082] p-2 flex-shrink-0 shadow-md group-hover:rotate-12 transition-transform duration-300"
                    />
                    <span>
                      Hope Kombucha was founded in 2021 by <strong>Dr. Arawindan J</strong> with a clear belief - India deserves a safer, smarter
                      alternative to sugary beverages.
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <img
                      src={leaficon}
                      alt=""
                      className="mr-5 mt-1 w-10 h-10 rounded-full bg-[#611082] p-2 flex-shrink-0 shadow-md group-hover:rotate-12 transition-transform duration-300"
                    />
                    <span>
                      Driven by a passion for functional wellness and clean-label
                      nutrition, he set out to blend traditional fermentation
                      science with modern food safety systems.
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <img
                      src={leaficon}
                      alt=""
                      className="mr-5 mt-1 w-10 h-10 rounded-full bg-[#611082] p-2 flex-shrink-0 shadow-md group-hover:rotate-12 transition-transform duration-300"
                    />
                    <span>
                      What began as a vision to create a probiotic-rich,
                      gut-friendly beverage has evolved into a structured,
                      FSSAI-compliant brand focused on quality, scalability, and
                      national expansion.
                    </span>
                  </li>
                </ul>

                {/* Quote Section integrated into content flow */}
                <div className="pt-12">
                  <div
                    className="bg-[#f4c430] bg-gradient-to-tl from-[#f4c430] from-0% to-[#fdd017] to-[74%] p-8 relative shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/60 transform hover:scale-[1.01] transition-transform duration-500"
                    style={{
                      borderTopLeftRadius: "40px",
                      borderBottomRightRadius: "40px",
                    }}
                  >
                    <p className="text-[22px] md:text-[26px] font-heading text-[#3E3224] italic font-bold leading-snug">
                      “ Health is not a trend. It is a daily choice. And that choice should taste good. ”
                    </p>

                    <QuoteIcon  className="text-[#611082] w-8 h-8 md:w-12 md:h-12 absolute bottom-4 right-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManBehindTheMove;
