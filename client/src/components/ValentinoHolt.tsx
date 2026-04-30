import Heading from "./ui/Heading";
import valentino from "../assets/images/valentino.jpeg";
import bgbottle from "../assets/images/bg/ginger-mint-lemon.webp";

const ValentinoHolt = () => {
  return (
    <section className="py-20 bg-[#f4c430] bg-gradient-to-tl from-[#f4c430] from-0% to-[#fdd017] to-[74%] relative overflow-hidden" id="valentino-presentation">
      <div className="container mx-auto">
        {/* Content Wrapper */}
        <div
          className="relative mx-auto container  py-12 overflow-hidden z-10 md:px-20 px-10"
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
          <div className="relative max-w-7xl mx-auto z-10">
            {/* Section Header */}
            <div className="flex flex-col items-center justify-center mb-8">
              <Heading
                title1="Presentation"
                title2="by Valentino Holt"
                subtitle="Danish Kombucha pioneer"
                textAlignment="center"
                titleColor="text-gray-800"
                subtitleColor="text-gray-800"
              />
            </div>

            {/* Letter Box Style Content */}
            <div className="w-full relative block pt-5">
              {/* Floated Image Side */}
              <div className="float-none lg:float-right lg:ml-20 mb-6 mt-2 relative flex flex-col items-center justify-center w-full lg:w-max">
                <div className="relative group" >
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                  <img
                    src={valentino}
                    alt="Valentino Holt - Danish Kombucha Pioneer"
                    className="relative z-10 object-cover w-[250px] h-[450px] md:w-[320px] md:h-[420px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[8px] border-white/80 backdrop-blur-sm object-[center_top] transition-transform duration-500 hover:scale-[1.02]"
                    style={{borderTopLeftRadius:"40px", borderBottomRightRadius:"40px"}}
                  />
                </div>

                <div className="mt-5 text-center px-4 w-full">
                  <h4 className="font-heading text-xl md:text-2xl font-bold text-gray-800 tracking-tight">Valentino Holt</h4>
                  <p className="text-[#611082] text-xs tracking-widest uppercase font-semibold mt-1">
                    Kombucha Artisan
                  </p>
                </div>
              </div>

              {/* Text Flow Side */}
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-gray-800 mb-6 italic text-center lg:text-left">
                Expertise – <span className="text-[#611082] shadow-sm font-bold opacity-90">A Decade of Craft and Innovation</span>
              </h3>

              <div className="space-y-4 text-gray-700 font-body text-[15px] sm:text-[16px] leading-[1.8] relative z-10 text-justify md:text-left">
                <p>
                  Our collaboration with Hope Life Kombucha is rooted in more than a decade of dedicated experience in professional kombucha production and brand development.
                </p>
                <p>
                  My Kombucha journey began in 2012 in <span className="font-semibold text-gray-800">Denmark</span>, where production started on a modest scale—just 300 liters per month, crafted entirely by hand. Every aspect of the process was managed in-house, from brewing and bottling to labeling, recipe formulation, and design. This hands-on approach allowed for a deep understanding of fermentation, while maintaining a strong commitment to authenticity, balance, and craftsmanship.
                </p>
                <p>
                  By 2016, I reached a significant milestone through a distribution partnership with <span className="font-semibold text-gray-800">7‑Eleven Denmark</span>, enabling nationwide availability. This marked the transition into larger production facilities and a substantial scale-up—from 7,000 liters per month to 14,000 liters. The kombucha expanded its presence across major supermarket chains, as well as restaurants, cafés, and health-focused stores throughout Denmark.
                </p>
                <p>
                  Beyond the domestic market, the brand actively participated in leading health and wellness exhibitions in Germany and Sweden, contributing to the growing appreciation of high-quality kombucha across Northern Europe. During this period, the product was also recognized by one of Denmark’s leading newspapers as the <span className="italic font-medium text-gray-800">finest Danish kombucha</span>—an acknowledgment of its quality and commitment to excellence.
                </p>
                <p>
                  Today, this strong foundation in fermentation expertise and scalable production supports the expansion into new markets, including India. In partnership with <span className="font-semibold text-gray-800 decoration-gold/40 underline underline-offset-4 decoration-2">Hope Life Kombucha</span>, we bring together Danish precision and local creativity—ensuring that every bottle reflects the same spirit of craftsmanship and innovation that began in Denmark over a decade ago.
                </p>
              </div>

              {/* Quote Icon overlay */}
              <div className="absolute top-4 left-4 md:top-8 md:left-8 text-[#E6E6E6]/60 pointer-events-none z-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="opacity-40">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>

              <div className="clear-both"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValentinoHolt;
