import nocolour from "../assets/images/specalites/no-colours.png";
import noadditives from "../assets/images/specalites/no-additives.png";
import nopreservatives from "../assets/images/specalites/no-preserves.png";
import Heading from "./ui/Heading";
import flower from "../assets/images/bg/flower.png";

const OurCraftmanship = () => {
  const cards = [
    {
      image: nocolour,
      title: "No Added Colours",
    },

    {
      image: nopreservatives,
      title: "No Added Preservatives",
    },
    {
      image: noadditives,
      title: "No Added Additives",
    },
  ];
  return (
    <div
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/src/assets/images/bg/graybg.jpg')",
        backgroundColor: "#F5F5F5",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🌸 Flower */}
      <img
        src={flower}
        alt=""
        className="absolute bottom-0 left-0 w-full max-w-full opacity-30 pointer-events-none z-0"
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* section heading */}
        <Heading
          title1="Our"
          title2="Craftsmanship"
          subtitle="Discover"
          textAlignment="center"
          titleColor="text-gray-800"
          subtitleColor="text-forest-green"
        />

        {/* cards */}
        <div className="flex md:flex-row flex-col justify-center items-center gap-25">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-36 h-36 rounded-full bg-orange p-1 
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
                className="bg-forest-green mt-6 py-4 px-4 w-full"
                style={{
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "30px",
                  borderTopRightRadius: "0px",
                }}
              >
                <h3 className="text-[18px]  font-bold uppercase tracking-[0.1em] text-white">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCraftmanship;
