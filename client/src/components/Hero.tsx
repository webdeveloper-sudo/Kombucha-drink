import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

import TurmericImg from "../assets/images/Turmeric.png";
import GingerImg from "../assets/images/Ginger.png";
import ElixirImg from "../assets/images/Elixir.png";
import ButterflyPeaImg from "../assets/images/Butterfly Pea.png";
import RoseImg from "../assets/images/Rose.png";
import MintImg from "../assets/images/Mint.png";
import HibiscusImg from "../assets/images/Hibiscus.png";

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
    title: "Turmeric Fusion",
    description: "Anti-inflammatory powerhouse with golden healing",
    image: TurmericImg,
    colorName: "turmeric",
  },
  {
    id: 2,
    title: "Ginger Zest",
    description: "Warming ginger kick for digestive wellness",
    image: GingerImg,
    colorName: "ginger",
  },
  {
    id: 3,
    title: "Elixir Blend",
    description: "Premium wellness elixir with ancient herbs",
    image: ElixirImg,
    colorName: "elixir",
  },
  {
    id: 4,
    title: "Butterfly Pea",
    description: "Enchanting blue butterfly flower infusion",
    image: ButterflyPeaImg,
    colorName: "pea",
  },
  {
    id: 5,
    title: "Rose Harmony",
    description: "Delicate rose petals for inner beauty",
    image: RoseImg,
    colorName: "rose",
  },
  {
    id: 6,
    title: "Mint Fresh",
    description: "Cooling mint for refreshing vitality",
    image: MintImg,
    colorName: "mint",
  },
  {
    id: 7,
    title: "Hibiscus Bloom",
    description: "Tangy hibiscus for heart health",
    image: HibiscusImg,
    colorName: "hibiscus",
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
  const indicatorContainerRef = useRef<HTMLDivElement>(null);

  const currentProduct = products[currentIndex];

  const runTransition = (nextIndex: number) => {
    if (isAnimating.current || nextIndex === currentIndex) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(nextIndex);

        // ENTER ANIMATION
        const enterTl = gsap.timeline({
          onComplete: () => {
            isAnimating.current = false;
          },
        });

        // Set entry properties (coming from above because of the tumbling)
        enterTl
          .set(imageRef.current, {
            rotateY: -1080, // Start far back in tumbling (left to right spin)
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

          // Execute entry
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
          );
      },
    });

    // EXIT ANIMATION (Tornado Spin via Y-Axis as requested)
    tl.to(imageRef.current, {
      rotateY: 1080, // Intense 3D Y-axis spin out (3 full rotations left-to-right)
      scale: 1, // Shrinking into distance
      opacity: 0,
      filter: "blur(20px)",
      z: -500, // Pushing back in 3D space
      duration: 1,
      ease: "power2.in",
    }).to(
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
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      runTransition((currentIndex + 1) % products.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-50 selection:bg-white/30 selection:text-white">
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

      {/* Soft Vignette Overlay to frame content perfectly without being dark */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.15)_100%)] pointer-events-none" />

      {/* 3-Column Grid Layout */}
      <div className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-3 px-6 lg:px-12 py-32 items-center">
        {/* Left Column: Top-Left Aligned */}
        <div className="h-full flex flex-col justify-between col-span-1 pt-16 lg:pt-24">
          <div>
            <p className="text-white/70 uppercase text-xs lg:text-md tracking-[0.3em] font-medium mb-4">
              Welcome to AGOC
            </p>
            <h1 className="text-white font-heading text-5xl lg:text-7xl font-light leading-tight drop-shadow-lg">
              Premium <br />
              <span className="font-semibold italic">Crafted</span> Kombucha
            </h1>
            <div className="w-12 h-[2px] bg-white/40 mt-6 rounded-full" />
          </div>
          <div className="pb-8 lg:pb-16">
            <a
              href="#flavours"
              className="text-white/70 flex gap-2 rounded-full border border-gray-300 py-2 px-3 items-center max-w-fit uppercase text-xs lg:text-md tracking-[0.3em] font-medium mb-4"
            >
              View All Flavours <ArrowRight />
            </a>
          </div>
        </div>

        {/* Center Column: Image Container with 3D Transform Properties */}
        <div
          className="col-span-1 flex items-center justify-center relative w-full h-[50vh] lg:h-full"
          style={{ perspective: "1500px" }}
        >
          {/* GSAP will animate this image wrapper directly */}
          <div
            className="relative w-128 h-128 sm:w-80 sm:h-80 lg:w-[750px] lg:h-[750px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-white/10 blur-[60px] rounded-full scale-75 pointer-events-none" />
            <img
              ref={imageRef}
              src={currentProduct.image}
              alt={currentProduct.title}
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              style={{ transformOrigin: "center center" }}
            />
          </div>
        </div>

        {/* Right Column: Bottom-Right Aligned */}
        <div className="h-full flex flex-col justify-end items-end text-right col-span-1 pb-8 lg:pb-16 overflow-hidden">
          <div className="p-6 rounded-2xl ">
            <h2
              ref={titleRef}
              className="text-3xl lg:text-6xl italic font-bold text-white mb-2 tracking-tight drop-shadow-md"
            >
              {currentProduct.title}
            </h2>
            <p
              ref={descRef}
              className="text-white/70 uppercase text-xs lg:text-md tracking-[0.3em] font-medium mb-4"
            >
              {currentProduct.description}
            </p>
          </div>
        </div>
      </div>

      {/* Modern Indicators */}
      <div
        ref={indicatorContainerRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20"
      >
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => runTransition(i)}
            className="group relative flex items-center justify-center w-6 h-6 outline-none"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === currentIndex
                  ? "bg-white scale-150 shadow-[0_0_15px_rgba(255,255,255,1)]"
                  : "bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Hero;
