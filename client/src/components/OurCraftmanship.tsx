import nocolour from "../assets/images/specalites/no-colours.webp";
import noadditives from "../assets/images/specalites/no-additives.webp";
import nopreservatives from "../assets/images/specalites/no-preserves.webp";
import Heading from "./ui/Heading";
import bgbottles from "../assets/images/bg/ginger-mint-lemon.webp";

// Decorative Elements
import elementLeft from "../assets/images/Elements/—Pngtree—mint leaves isolated_13004783.png";
import elementRight from "../assets/images/Elements/—Pngtree—ginger with sliced lemon_13379624.png";

const OurCraftmanship = () => {
  const cards = [
    {
      image: nocolour,
      title: "Natural Colours Only",
      legend:"NO ARTIFICIAL COLOURS"
    },
    {
      image: nopreservatives,
      title: "Preservative-Free Freshness",
      legend:"NO PRESERVATIVES USED"

    },
    {
      image: noadditives,
      title: "Pure Natural Ingredients",
      legend:"NO ADDITIVE INGREDIENTS"
    },
  ];

  return (
    <div className="py-20 relative overflow-hidden bg-three">
      {/* CONTENT */}
      <div
        className="relative mx-auto container py-12 overflow-hidden"
        style={{
          backgroundImage: `url(${bgbottles})`,
          backgroundPosition: "center",
          borderTopLeftRadius: "60px",
          borderBottomRightRadius: "60px",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/76"></div>

        <div className="relative z-10 flex flex-col items-center">
          <Heading
            title1="Our"
            title2="Craftsmanship"
            subtitle="Discover"
            textAlignment="center"
            titleColor="text-gray-800"
            subtitleColor="text-gray-800"
          />

          <div className="flex md:flex-row flex-col justify-center items-center gap-6 lg:gap-28 mt-4">
            {cards.map((card, index) => (
              <div key={index} className="flex flex-col items-center max-w-[300px]">
                {/* Circle Image Container */}
                <div
                  className="w-40 h-40 rounded-full bg-[#611082] p-1 
                    shadow-[0_10px_25px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.6)] z-10"
                >
                  <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                    <img
                      src={card.image}
                      className="w-full h-full object-cover scale-[1.3]"
                      alt={card.title}
                    />
                  </div>
                </div>

                {/* Title Box with Decorative Elements */}
                <div className="relative w-full mt-6 flex justify-center items-center">
                  {/* Decorative Elements (Left & Right) */}
                  <img
                    src={elementLeft}
                    alt=""
                    className="absolute -left-14 -top-6 w-28 h-28 object-contain opacity-80 pointer-events-none -z-0 rotate-[-15deg]"
                  />
                  <img
                    src={elementRight}
                    alt=""
                    className="absolute -right-14 -bottom-10 w-28 h-28 object-contain opacity-80 pointer-events-none -z-0 rotate-[15deg]"
                  />

                  {/* The Box */}
                  <div
                    className="bg-[#f4c430] py-5 border border-gray-400 px-6 w-full text-center relative z-10 shadow-md"
                    style={{
                      borderTopLeftRadius: "35px",
                      borderBottomRightRadius: "35px",
                    }}
                  >
                    <h3 className="text-[20px] md:text-[22px] font-bold capitalize italic tracking-wide text-[#43075c] leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Legend Section */}
                <div className="mt-6 text-center">
                  <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-gray-800 uppercase leading-relaxed max-w-[220px] mx-auto opacity-90">
                  {card.legend}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCraftmanship;
