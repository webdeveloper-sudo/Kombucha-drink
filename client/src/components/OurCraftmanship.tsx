import nocolour from "../assets/images/specalites/no-colours.webp";
import noadditives from "../assets/images/specalites/no-additives.webp";
import nopreservatives from "../assets/images/specalites/no-preserves.webp";
import Heading from "./ui/Heading";
import bgbottles from "../assets/images/bg/151999409_10512358.jpg";

const OurCraftmanship = () => {
  const cards = [
    {
      image: nocolour,
      title: "Natural Colours Only",
    },

    {
      image: nopreservatives,
      title: "Preservative-Free Freshness",
    },
    {
      image: noadditives,
      title: "Pure Natural Ingredients",
    },
  ];
  return (
    <div
      className="py-20 relative overflow-hidden bg-[#f4c430] bg-gradient-to-tl from-[#f4c430] from-0% to-[#fdd017] to-[74%]"
     
    >
      {/* 🌸 Flower */}
      {/* <img
        src={flower}
        alt=""
        className="absolute bottom-0 left-0 w-full max-w-full opacity-30 pointer-events-none z-0"
      /> */}

      {/* CONTENT */}
      <div
        className="relative mx-auto container py-12 overflow-hidden"
        style={{
          backgroundImage: `url(${bgbottles})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: "60px",
          borderBottomRightRadius: "60px",
        }}
      >
        {/* Overlay (controls transparency) */}
        <div className="absolute inset-0 bg-white/90"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* section heading */}
          <Heading
            title1="Our"
            title2="Craftsmanship"
            subtitle="Discover"
            textAlignment="center"
            titleColor="text-gray-800"
            subtitleColor="text-gray-800"
          />

          {/* cards */}
          <div className="flex md:flex-row flex-col justify-center items-center gap-25">
            {cards.map((card, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-36 h-36 rounded-full bg-brand-purple p-1 
            shadow-[0_10px_25px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.6)]"
                >
                  <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                    <img
                      src={card.image}
                      className="w-full h-full object-cover scale-[1.3]"
                      alt={card.title}
                    />
                  </div>
                </div>

                <div
                  className="bg-gold mt-6 py-4 border border-gray-400 px-4 w-full"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderBottomRightRadius: "30px",
                  }}
                >
                  <h3 className="text-[18px] font-bold uppercase tracking-[0.1em] text-gray-800">
                    {card.title}
                  </h3>
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
