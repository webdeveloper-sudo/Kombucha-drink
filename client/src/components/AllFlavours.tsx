import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import TurmericImg from "../assets/images/allflavours/Turmeric (1).png";
import GingerImg from "../assets/images/allflavours/Ginger.png";
import ElixirImg from "../assets/images/allflavours/Elixir.png";
import ButterflyPeaImg from "../assets/images/allflavours/Butterfly Pea.png";
import RoseImg from "../assets/images/allflavours/Rose.png";
import MintImg from "../assets/images/allflavours/Mint.png";
import HibiscusImg from "../assets/images/allflavours/Hibiscus.png";
import Heading from "./ui/Heading";

const products = [
  {
    id: 1,
    title: "Turmeric Fusion",
    description: "Anti-inflammatory powerhouse with golden healing",
    image: TurmericImg,
    category: "Wellness",
    colorName: "turmeric",
  },
  {
    id: 2,
    title: "Ginger Zest",
    description: "Warming ginger kick for digestive wellness",
    image: GingerImg,
    category: "Digestion",
    colorName: "ginger",
  },
  {
    id: 3,
    title: "Elixir Blend",
    description: "Premium wellness elixir with ancient herbs",
    image: ElixirImg,
    category: "Wellness",
    colorName: "elixir",
  },
  {
    id: 4,
    title: "Butterfly Pea",
    description: "Enchanting blue butterfly flower infusion",
    image: ButterflyPeaImg,
    category: "Beauty",
    colorName: "pea",
  },
  {
    id: 5,
    title: "Rose Harmony",
    description: "Delicate rose petals for inner beauty",
    image: RoseImg,
    category: "Beauty",
    colorName: "rose",
  },
  {
    id: 6,
    title: "Mint Fresh",
    description: "Cooling mint for refreshing vitality",
    image: MintImg,
    category: "Energy",
    colorName: "mint",
  },
  {
    id: 7,
    title: "Hibiscus Bloom",
    description: "Tangy hibiscus for heart health",
    image: HibiscusImg,
    category: "Wellness",
    colorName: "hibiscus",
  },
];

const categories = ["All", "Wellness", "Digestion", "Beauty", "Energy"];

const AllFlavours = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [swiperRef, setSwiperRef] = useState<any | null>(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Swiper sometimes clusters items on the left if there aren't enough slides to loop a 3D Coverflow.
  // Duplicating the array ensures it always has enough DOM nodes to perfectly balance left and right!
  const carouselItems =
    filteredProducts.length > 0 && filteredProducts.length < 12
      ? [...filteredProducts, ...filteredProducts, ...filteredProducts]
      : filteredProducts;

  return (
    <div id="flavours" className="py-20 bg-slate-50 flex flex-col items-center">
      {/* Inline Styles specifically for Swiper overlap */}
      <style>{`
        .custom-swiper-pagination-bullet-active {
          opacity: 1;
          background: #1B4D3E; /* forest-green */
          width: 15px;
          height: 15px;
        }
        .custom-swiper-pagination-bullet {
          background: #4A7C59;
          width: 13px;
          height: 13px;
        }
        
        /* 
          Strictly hide any slides Swiper considers outside the "visible" range.
          With slidesPerView=5, exactly 5 slides will have .swiper-slide-visible
        */
        .swiper-slide {
          opacity: 0 !important;
          pointer-events: none;
          transition: opacity 0.5s ease;
          visibility: hidden;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        .swiper-slide-visible {
          opacity: 1 !important;
          pointer-events: auto;
          visibility: visible;
        }
        
        /* Make the center active item pop out significantly larger */
        .swiper-slide > div {
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1) !important;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .swiper-slide-active > div {
          transform: scale(1.15) translateY(-10px) translateZ(0) !important;
          // box-shadow: 0 40px 60px -15px rgba(0,0,0,0.15) !important;
          z-index: 50;
        }
      `}</style>

      {/* Section Header */}
      <Heading title1="Our" title2="Flavours" subtitle="Discover" textAlignment="center"/>

      {/* Category Filter */}
      {/* <div className="flex flex-wrap items-center justify-center gap-3 mb-12 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-6 py-2 text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-forest-green text-white shadow-lg scale-105"
                : "bg-white text-forest-green border border-forest-green/20 hover:border-forest-green/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div> */}

      {/* Carousel Container */}
      <div className="w-full max-w-[1400px] overflow-hidden flex justify-center pb-8">
        {carouselItems.length > 0 ? (
          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
            watchSlidesProgress={true} // Crucial for .swiper-slide-visible
            centeredSlides={true}
            loop={true}
            slideToClickedSlide={true}
            spaceBetween={0}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: -20, // Mild overlap
              depth: 150, // Subtle 3D push back
              modifier: 1.2, // Clean scaling
              slideShadows: false,
            }}
            onSwiper={setSwiperRef}
            className="w-full"
          >
            {carouselItems.map((product, index) => (
              <SwiperSlide
                key={`${product.id}-${index}`}
                style={{
                  width: "360px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Premium Glass Card replacing Shadcn UI */}
                <div className="relative w-full max-w-[500px] h-[520px] overflow-hidden transition-all duration-300 flex flex-col items-center py-10 px-6 group">
                  {/* Subtle inner glass highlight */}
                  <div className="absolute inset-0 border border-white/60 rounded-3xl pointer-events-none" />

                  {/* Giant Category Text (Behind Bottle) */}
                  <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full mx-auto text-center z-0 pointer-events-none px-4">
                    <span className="text-[18px] sm:text-[36px] font-heading text-black/30 uppercase tracking-[0.1em] whitespace-nowrap opacity-60">
                      {product.category}
                    </span>
                  </div>

                  {/* Profile / Bottle Image Container */}
                  <div className="relative w-72 h-72 mb-4 transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-contain h-full w-full z-10"
                    />
                    {/* Glowing orb behind bottle */}
                    <div className="absolute inset-0 bg-white/40 blur-2xl rounded-full scale-150 -z-10" />
                  </div>

                  {/* Name and Tagline */}
                  <h3
                    className={`text-3xl font-heading text-gray-800 font-bold text-center mb-2 drop-shadow-sm`}
                  >
                    {product.title}
                  </h3>
                  <p className="text-[14px] text-forest-green/80 text-center font-body flex-grow mb-6">
                    {product.description}
                  </p>

                  <div className="w-full border-t border-forest-green/10 my-2 mt-auto" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="py-20 text-forest-green/60 uppercase font-medium tracking-widest text-sm">
            No flavours found for this category.
          </div>
        )}
      </div>

      {/* Custom Prev/Next Arrows */}
      {carouselItems.length > 0 && (
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={() => swiperRef?.slidePrev()}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 text-gray-600 font-bold text-xl hover:bg-forest-green hover:text-white transition duration-300 shadow-md hover:shadow-xl hover:-translate-x-1"
          >
            {"<"}
          </button>
          <button
            onClick={() => swiperRef?.slideNext()}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 text-gray-600 font-bold text-xl hover:bg-forest-green hover:text-white transition duration-300 shadow-md hover:shadow-xl hover:translate-x-1"
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AllFlavours;
