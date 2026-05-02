import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroElement from "./ui/HeroElement";

import TurmericImg from "../assets/images/Turmeric.webp";
import GingerImg from "../assets/images/Ginger.webp";
import ElixirImg from "../assets/images/Elixir.webp";
import ButterflyPeaImg from "../assets/images/Butterfly Pea.webp";
import RoseImg from "../assets/images/Rose.webp";
import MintImg from "../assets/images/Mint.webp";
import HibiscusImg from "../assets/images/Hibiscus.webp";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  colorName: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Turmeric Kombucha",
    description: "Anti-inflammatory powerhouse with golden healing",
    image: TurmericImg,
    colorName: "turmeric",
  },
  {
    id: 4,
    title: "Butterfly Pea Kombucha",
    description: "Enchanting blue butterfly flower infusion",
    image: ButterflyPeaImg,
    colorName: "pea",
  },
  {
    id: 2,
    title: "Ginger Kombucha",
    description: "Warming ginger kick for digestive wellness",
    image: GingerImg,
    colorName: "ginger",
  },
  {
    id: 7,
    title: "Hibiscus Kombucha",
    description: "Tangy hibiscus for heart health",
    image: HibiscusImg,
    colorName: "hibiscus",
  },
  {
    id: 5,
    title: "Rose Kombucha",
    description: "Delicate rose petals for inner beauty",
    image: RoseImg,
    colorName: "rose",
  },
  {
    id: 3,
    title: "Elixir Kombucha",
    description: "Kombucha in its purest form",
    image: ElixirImg,
    colorName: "elixir",
  },

  {
    id: 6,
    title: "Mint Kombucha",
    description: "Cooling mint for refreshing vitality",
    image: MintImg,
    colorName: "mint",
  },
];

const AUTOPLAY_INTERVAL = 4000;

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  // Refs for GSAP
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const element1Ref = useRef<HTMLImageElement>(null);
  const element2Ref = useRef<HTMLImageElement>(null);

  const currentProduct = products[currentIndex];

  const runEntranceAnimation = () => {
    isAnimating.current = true;
    const enterTl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    enterTl
      .set(imageRef.current, {
        rotateY: -1080,
        scale: 1,
        opacity: 0,
        filter: "blur(20px)",
        z: -500,
      })
      .set([titleRef.current, descRef.current], {
        x: 50,
        opacity: 0,
        filter: "blur(5px)",
      })
      .set(element1Ref.current, {
        y: 100,
        opacity: 0,
      })
      .set(element2Ref.current, {
        x: 100,
        opacity: 0,
      })
      .to(imageRef.current, {
        rotateY: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        z: 0,
        duration: 1.2,
        ease: "power3.out",
      })
      .to(
        [titleRef.current, descRef.current],
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.8",
      )
      .to(
        [element1Ref.current, element2Ref.current],
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.8",
      );
  };

  const runTransition = (nextIndex: number) => {
    if (isAnimating.current || nextIndex === currentIndex) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(nextIndex);
      },
    });

    tl.to(imageRef.current, {
      rotateY: 1080,
      scale: 1,
      opacity: 0,
      filter: "blur(20px)",
      z: -500,
      duration: 1,
      ease: "power2.in",
    })
      .to(
        [titleRef.current, descRef.current],
        {
          x: -50,
          opacity: 0,
          filter: "blur(5px)",
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.in",
        },
        "-=1",
      )
      .to(
        [element1Ref.current, element2Ref.current],
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.5",
      );
  };

  useEffect(() => {
    // Run entrance animation whenever currentIndex changes (including initial mount)
    runEntranceAnimation();
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      runTransition((currentIndex + 1) % products.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    runTransition((currentIndex + 1) % products.length);
  };

  const handlePrev = () => {
    runTransition((currentIndex - 1 + products.length) % products.length);
  };

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-gold selection:bg-white/30 selection:text-white">
      {/* Background Gradient Container mapping for lag-free opacity crossfade */}
      {products.map((product, index) => (
        <div
          key={product.id}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, var(--${product.colorName}-primary) 0%, var(--${product.colorName}-secondary) 100%)`,
            opacity: currentIndex === index ? 1 : 0,
          }}
        />
      ))}

      {/* Glass Overlay for Premium Feel */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[6px]" />

      {/* Soft Vignette Overlay to frame content perfectly and darken corners smoothly */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.3)_100%)] pointer-events-none" />

      {/* Floating Elements Animation */}
      <HeroElement
        key={currentIndex}
        variant={currentProduct.colorName}
        element1Ref={element1Ref}
        element2Ref={element2Ref}
      />

      {/* 3-Column Grid Layout */}
      <div className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-3 px-6 lg:px-12 py-36 lg:py-32 items-center">
        {/* Left Column: Top-Left Aligned */}
        <div className="h-full flex flex-col justify-between col-span-1 pt-8 lg:pt-24 text-center lg:text-left">
          <div>
            <p className="text-white/70 uppercase text-[10px] lg:text-md tracking-[0.3em] font-medium mb-2 lg:mb-4">
              Welcome to Hope Life
            </p>
            <h1 className="text-white font-heading text-4xl md:text-5xl lg:text-7xl font-light leading-tight drop-shadow-lg">
              Premium <br /> Crafted
              <span className="font-semibold italic"> Kombucha</span>
            </h1>
            <div className="w-12 h-[2px] bg-white/40 mt-6 mx-auto lg:mx-0 rounded-full" />
          </div>
        </div>

        {/* Center Column: Image Container with 3D Transform Properties */}
        <div
          className="col-span-1 flex items-center justify-center relative w-full h-[35vh] md:h-[50vh] lg:h-full mt-8 lg:my-0"
          style={{ perspective: "1500px" }}
        >
          {/* GSAP will animate this image wrapper directly */}
          <div
            className="relative w-80 h-80 sm:w-90 sm:h-90 lg:w-[750px] lg:h-[750px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-white/10 blur-[60px] rounded-full scale-75 pointer-events-none" />
            <img
              ref={imageRef}
              key={currentIndex}
              src={currentProduct.image}
              alt={currentProduct.title}
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              style={{ transformOrigin: "center center" }}
            />
          </div>
        </div>

        {/* Right Column: Bottom-Right Aligned */}
        <div className="h-full flex flex-col justify-end items-center lg:items-end text-center lg:text-right col-span-1   lg:pb-16 overflow-hidden">
          <div className="p-4  lg:p-6 rounded-2xl ">
            <h2
              ref={titleRef}
              className="text-2xl md:text-3xl lg:text-6xl italic font-bold text-white mb-2 tracking-tight drop-shadow-md"
            >
              {currentProduct.title}
            </h2>
            <p
              ref={descRef}
              className="text-white/70 uppercase text-[10px] lg:text-md tracking-[0.3em] font-medium mb-4"
            >
              {currentProduct.description}
            </p>
          </div>
        </div>
      </div>

      {/* Modern Indicators & Navigation */}
      <div className="absolute bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 lg:gap-8 z-20">
        <button
          onClick={handlePrev}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
        </button>

        <button
          onClick={handleNext}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </section>
  );
}

export default Hero;
