
import tea from "../assets/images/ingredients/tea.png";
import sugar from "../assets/images/ingredients/sugar.png";
import botanical from "../assets/images/ingredients/botanical.png";
import scoby from "../assets/images/ingredients/scope.png";
import Heading from "./ui/Heading";
import customers from "../assets/images/customers.png";

const Ingredients = () => {
  const ingredients = [
    {
      image: tea,
      title: "Premium Tea Leaves",
      subtext: "sourced from organic farms",
    },
    {
      image: sugar,
      title: "Measured Natural Sugar",
      subtext: "for fermentaion only",
    },
    {
      image: botanical,
      title: "Natural Botanical Infusions",
      subtext: "organic herbs and spices",
    },
    {
      image: scoby,
      title: "Live SCOBY Culture",
      subtext: "symbiotic culture of bacteria and yeast",
    },
  ];

  return (
    <div className="py-20 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch gap-15">

     

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <Heading
            title1="Core"
            title2="Ingredients"
            subtitle="Hope kombucha"
            textAlignment="left"
            titleColor="text-gray-800"
            subtitleColor="text-forest-green"
          />

          <div className="space-y-6">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center gap-4">

                {/* ICON */}
                <img
                  src={ingredient.image}
                  alt={ingredient.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 border border-3 border-orange rounded-full shadow-[0_10px_15px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.6)] object-contain flex-shrink-0"
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
  );
};

export default Ingredients;