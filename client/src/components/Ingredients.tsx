
import tea from "../assets/images/ingredients/tea.webp";
import sugar from "../assets/images/ingredients/sugar.webp";
import botanical from "../assets/images/ingredients/botanical.webp";
import scoby from "../assets/images/ingredients/scope.webp";
import Heading from "./ui/Heading";
import customers from "../assets/images/customers.webp";
import Button from "./ui/Button";
import bgbottles from "../assets/images/bg/ginger-mint-lemon.webp";

const Ingredients = () => {
  const ingredients = [
    {
      image: tea,
      title: "Organic Green Tea",
      subtext: "sourced from organic farms",
    },
    {
      image: sugar,
      title: "Organic Brown Sugar",
      subtext: "for fermentaion only",
    },
    {
      image: botanical,
      title: "Natural Botanical Infusions",
      subtext: "fresh flowers and fresh roots",
    },
    {
      image: scoby,
      title: "Live SCOBY Culture",
      subtext: "symbiotic culture of bacteria and yeast",
    },
  ];

  return (
    <div className="py-16  bg-[#f4c430] bg-gradient-to-tl from-[#f4c430] from-0% to-[#fdd017] to-[74%]">
      <div className="container relative rounded-xl py-16 px-4 md:px-12 mx-auto  items-stretch gap-15"   style={{
          backgroundImage: `url(${bgbottles})`,
          backgroundPosition: "center",
          borderTopLeftRadius: "60px",
          borderBottomRightRadius: "60px",
        }}>
          
          {/* Overlay */}
      <div className="absolute rounded-2xl inset-0 bg-white/80"></div>

       <div className="relative z-10 flex flex-col md:flex-row">
         {/* RIGHT CONTENT */}
        <div className="w-full md:mb-0 mb-8 md:w-1/2 flex flex-col justify-center">
          <Heading
            title1="Core"
            title2="Ingredients"
            subtitle="Hope Life kombucha"
            textAlignment="left"
            titleColor="text-gray-800"
            subtitleColor="text-gray-800"
          />

          <div className="space-y-6">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center gap-4">

                {/* ICON */}
                <img
                  src={ingredient.image}
                  alt={ingredient.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 border border-gray-200 rounded-full shadow-[0_10px_15px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.6)] object-contain flex-shrink-0"
                />

                {/* TEXT */}
                <div>
                  <h3 className="text-xl text-gray-800 sm:text-2xl md:text-3xl font-bold leading-tight">
                    {ingredient.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {ingredient.subtext}
                  </p>
                </div>

              </div>
            ))}
          </div>
                 <div className="pt-8">
                   <Button title="Explore Our Flavours" href="#our-flavours" variant="secondary" />
                 </div>

        </div>
           {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src={customers}
            alt="customers"
            className="w-full h-full object-cover border border-gray-400 shadow-xl"
            style={{borderTopLeftRadius:"90px", borderBottomLeftRadius:"0px", borderBottomRightRadius:"90px", borderTopRightRadius:"0px"}}
          />
        </div>
       </div>

      </div>
    </div>
  );
};

export default Ingredients;