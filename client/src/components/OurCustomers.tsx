import React from "react";
import customers from "../assets/images/customers.png";
import flower from "../assets/images/bg/flower.png";
import Heading from "./ui/Heading";
import leaficon from "../assets/icons/monstera.png";
import { Quote, QuoteIcon } from "lucide-react";

const OurCustomers = () => {
  return (
    <section
      className="w-full relative py-10"
      style={{
        backgroundImage: "url('/src/assets/images/bg/graybg.jpg')",
        backgroundColor: "#F5F5F5",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative">
        <img src={flower} className="absolute top-48 opacity-50 " alt="" />
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20 px-6">
        {/* Left Side: Image */}
        <div className="flex-1 py-20 w-full flex justify-center md:justify-end ">
          <div
            className="w-[90%]  md:w-full max-w-[550px] relative overflow-hidden"
            style={{ borderRadius: "100%" }}
          >
            <img
              src={customers}
              alt="Our Customers holding Kombucha"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="flex-1 z-10 w-full flex flex-col justify-center text-[#2C331E]">
          <Heading
            title1="Our"
            title2="Consumers"
            subtitle="Discover"
            textAlignment="left"
          />

          <p className="text-forest-green/70 uppercase text-md tracking-[0.3em] font-medium mb-3">
        Hope Kombucha is crafted for ,
        </p>

          <ul className="space-y-4 mb-8 font-body text-[1.15rem] text-[#4A3D36]">
            <li className="flex items-start">
              <img
                src={leaficon}
                alt=""
                className="mr-4 mt-2 w-9 h-9 rounded-full bg-[#FF852C] p-1 flex-shrink-0"
              />
              <span className="pt-2">Health-conscious individuals</span>
            </li>
            <li className="flex items-start">
             <img
                src={leaficon}
                alt=""
                className="mr-4 mt-2 w-9 h-9 rounded-full bg-[#FF852C] p-1 flex-shrink-0"
              />
              <span className="pt-2">Fitness & gym enthusiasts</span>
            </li>
            <li className="flex items-start">
             <img
                src={leaficon}
                alt=""
                className="mr-4 mt-2 w-9 h-9 rounded-full bg-[#FF852C] p-1 flex-shrink-0"
              />
              <span className="pt-2">Working professionals</span>
            </li>
            <li className="flex items-start">
              <img
                src={leaficon}
                alt=""
                className="mr-4 mt-2 w-9 h-9 rounded-full bg-[#FF852C] p-1 flex-shrink-0"
              />
                <span className="pt-2">Young adults seeking healthier swaps</span>
            </li>
            <li className="flex items-center">
          <img
                src={leaficon}
                alt=""
                className="mr-4 mt-2 w-9 h-9 rounded-full bg-[#FF852C] p-1 flex-shrink-0"
              />
              <span className="pt-2"> Wellness-focused families</span>
            </li>
          </ul>

          <div className="bg-forest-green z-10 px-8 py-4" style={{borderTopLeftRadius:"30px", borderBottomLeftRadius:"0px", borderBottomRightRadius:"30px", borderTopRightRadius:"0px"}}>
            <p className="text-xl md:text-xl font-heading font-bold leading-relaxed text-white/90 max-w-[90%]">
              It fits seamlessly into modern lifestyles - at the gym, at work,
              at home, or in cafés.
            </p>
            <QuoteIcon size={40} className="text-[#FF852C]/90 ms-auto mb-2"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCustomers;
