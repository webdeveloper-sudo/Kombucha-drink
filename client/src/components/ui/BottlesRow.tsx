import { motion } from "framer-motion";
import bgbottles from "../../assets/images/bg/ginger-mint-lemon.webp";

// Import all product images
import butterflyPea from "../../assets/images/products/Butterfly Pea.webp";
import elixir from "../../assets/images/products/Elixir.webp";
import ginger from "../../assets/images/products/Ginger.webp";
import hibiscus from "../../assets/images/products/Hibiscus.webp";
import mint from "../../assets/images/products/Mint.webp";
import rose from "../../assets/images/products/Rose.webp";
import turmeric from "../../assets/images/products/Turmeric.webp";
// import hero from '../../assets/images/products/hero.webp'

const productImages = [
  { src: butterflyPea, name: "Butterfly Pea" },
  { src: elixir, name: "Elixir" },
  { src: ginger, name: "Ginger" },
  { src: hibiscus, name: "Hibiscus" },
  { src: mint, name: "Mint" },
  { src: rose, name: "Rose" },
  { src: turmeric, name: "Turmeric" },
  //   { src: hero, name: 'Hero' },
];

const BottlesRow = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <div
      className="py-10 relative"
      style={{
        backgroundImage: `url(${bgbottles})`,
 
        backgroundPosition: "center",
        borderTopLeftRadius: "60px",
        borderBottomRightRadius: "20px",
      }}
    >
        {/* Overlay */}
      <div className="absolute inset-0 bg-white/76"></div>
      <div className="mx-auto container">
        <div className=" mx-auto w-full z-10 px-6 md:px-12 py-6 overflow-hidden">
          {/* Content */}
          <motion.div
            className="relative z-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {productImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-24 md:w-40 lg:w-70 hover:scale-130 transition-transform duration-300"
              >
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BottlesRow;
