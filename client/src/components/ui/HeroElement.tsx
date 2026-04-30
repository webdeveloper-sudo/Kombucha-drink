import React from "react";
import rose2 from "../../assets/images/Elements/rose1.png";
import rose1 from "../../assets/images/Elements/rose2.png";
import mint1 from "../../assets/images/Elements/—Pngtree—green mint leaf with water_15696937.png";
import mint2 from "../../assets/images/Elements/—Pngtree—mint leaves isolated_13004783.png";
import hibiscus1 from "../../assets/images/Elements/—Pngtree—red hibiscus flower_16332158.png";
import hibiscus2 from "../../assets/images/Elements/Red_Hibiscus_Flower_PNG___Realistic_Tropical_Illustration-PNGLove.com.png";
import ginger1 from "../../assets/images/Elements/—Pngtree—fresh ginger root with leaves_19168044.png";
import ginger2 from "../../assets/images/Elements/—Pngtree—ginger rhizome and sliced with_16615475.png";
import pea1 from "../../assets/images/Elements/d49237ea-a86b-4af7-a0c5-e595632457c6-converted.png";
import pea2 from "../../assets/images/Elements/—Pngtree—blue butterfly pea flower picture_6721310.png";
import turmeric1 from "../../assets/images/Elements/—Pngtree—fresh turmeric roots with powder_19968320.png";
import turmeric2 from "../../assets/images/Elements/—Pngtree—image of turmeric powder with_16791152.png";
import elixir1 from "../../assets/images/Elements/pngwing.com (5).png";
import elixir2 from "../../assets/images/Elements/pngwing.com (6).png";

const elementsMap: Record<string, { img1: string; img2: string }> = {
  rose: { img1: rose1, img2: rose2 },
  mint: { img1: mint1, img2: mint2 },
  hibiscus: { img1: hibiscus1, img2: hibiscus2 },
  ginger: { img1: ginger1, img2: ginger2 },
  pea: { img1: pea1, img2: pea2 },
  turmeric: { img1: turmeric1, img2: turmeric2 },
  elixir: { img1: elixir1, img2: elixir2 },
};

interface HeroElementProps {
  variant: string;
  element1Ref: React.RefObject<HTMLImageElement | null>;
  element2Ref: React.RefObject<HTMLImageElement | null>;
}

const HeroElement: React.FC<HeroElementProps> = ({
  variant,
  element1Ref,
  element2Ref,
}) => {
  const images = elementsMap[variant] || elementsMap.turmeric;

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Element 1: Bottom to Top (Left Bottom) */}
      <img
        ref={element1Ref}
        src={images.img1}
        alt=""
        className="absolute bottom-5 md:bottom-[10%] left-[5%] lg:left-[7%] w-30 md:w-48 lg:w-64 opacity-0 object-contain drop-shadow-2xl"
      />

      {/* Element 2: Right to Left (Right Top/Center) */}
      <img
        ref={element2Ref}
        src={images.img2}
        alt=""
        className="absolute bottom-50 md:bottom-80 right-5 lg:right-10 w-32 md:w-56 lg:w-80 opacity-0 object-contain drop-shadow-2xl"
      />
    </div>
  );
};

export default HeroElement;

