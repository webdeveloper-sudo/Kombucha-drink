import { useState } from "react";
import Heading from "./ui/Heading";
import { MapPin, ChevronDown } from "lucide-react";
import pothys from "../assets/images/outlets/pothys.jpg";
import grinde from "../assets/images/outlets/Grinde.jpg";
import vjs from "../assets/images/outlets/sri-vijayaganapathy-stores.avif"
import dailyneeds from "../assets/images/outlets/daily-needs.jpg"
import nilgiris from "../assets/images/outlets/nilgiris-tiruvannamalai.avif"
import hopecafe from "../assets/images/outlets/hope-cafe.jpg"
import arcfoods from "../assets/images/outlets/dummy.avif"
import farmfresh from "../assets/images/outlets/farm-fresh.avif"
import pourtous from "../assets/images/outlets/pour-tous.jpg"
import bluebasket from "../assets/images/outlets/blue-basket.jpg"
import colours from "../assets/images/outlets/maghalakshmi-plaazaa.avif"

const Outlets = () => {
  const allOutlets = [
    {
      image: pothys,
      name: "Pothys Super Store",
      address: "Anna salai",
      mapLink: "https://www.google.com/maps/search/Pothys+Super+Store+Anna+salai",
    },
    {
      image: grinde,
      name: "Grinde Store",
      address: "Nehru Street, Puducherry",
      mapLink: "https://www.google.com/maps/search/Grinde+Store+Nehru+Street",
    },
    {
      image: vjs,
      name: "Vijayaganapathy Stores",
      address: "Puducherry",
      mapLink: "https://www.google.com/maps/search/Vijayaganapathy+Stores+Pondicherry",
    },
    {
      image: dailyneeds,
      name: "Daily Needs",
      address: "Puducherry",
      mapLink: "https://www.google.com/maps/search/Daily+Needs+Pondicherry",
    },
    {
      image: nilgiris,
      name: "Nilgiris Store",
      address: "TV Malai",
      mapLink: "https://www.google.com/maps/search/Nilgiris+Store+TV+Malai",
    },
    {
      image: hopecafe,
      name: "Hope Cafe",
      address: "White Town, Puducherry",
      mapLink: "https://www.google.com/maps/search/Hope+Cafe+Pondicherry",
    },
    {
      image: farmfresh,
      name: "Farm Fresh",
      address: "Auroville, Puducherry",
      mapLink: "https://www.google.com/maps/search/Farm+Fresh+Auroville",
    },
    {
      image: pourtous,
      name: "Pour tous Store",
      address: "Auroville, Puducherry",
      mapLink: "https://www.google.com/maps/search/Pour+tous+Store+Auroville",
    },
    {
      image: bluebasket,
      name: "Blue basket",
      address: "Auroville, Puducherry",
      mapLink: "https://www.google.com/maps/search/Blue+basket+Auroville",
    },
    {
      image: arcfoods,
      name: "ARC Foods",
      address: "Chennai",
      mapLink: "https://www.google.com/maps/search/ARC+Foods+Chennai",
    },
    {
      image: arcfoods,
      name: "ARC Foods",
      address: "Madurai",
      mapLink: "https://www.google.com/maps/search/ARC+Foods+Madurai",
    },
    {
      image: arcfoods,
      name: "ARC Foods",
      address: "Coimbatore",
      mapLink: "https://www.google.com/maps/search/ARC+Foods+Coimbatore",
    },
    
    {
      image: colours,
      name: "Colours",
      address: "Mahalakshmi Plaza, Villupuram",
      mapLink: "https://www.google.com/maps/search/Colours+Mahalakshmi+Plaza+Villupuram",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(8);



  return (
    <section
      className="py-20 relative w-full overflow-hidden bg-three"
      style={{

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto rounded-2xl py-16 bg-white/85 md:px-16 px-4 relative z-10">
        <Heading
          title1="Our"
          title2="Outlets"
          subtitle="Find Us"
          textAlignment="center"
          titleColor="text-gray-800"
          subtitleColor="text-gray-800"
        />

        <p className="text-center text-gray-600 max-w-2xl text-sm  mx-auto mb-12 uppercase tracking-[0.2em] font-semibold">
          Our kombucha is available in the following markets:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {allOutlets.slice(0, visibleCount).map((outlet, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-md rounded-mdshadow-lg border border-gray-200 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden flex flex-col"
            >
              {/* Image with Link */}
              <a
                href={outlet.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-56 overflow-hidden mb-6 relative block"
              >
                <img
                  src={outlet.image}
                  alt={outlet.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                
                {/* See In Map Overlay */}
                {/* <div
                  className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-[#611082] backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold tracking-widest text-[10px] uppercase hover:text-white transition-colors duration-300 shadow-md group-hover:shadow-lg"
                >
                  <ExternalLink size={14} />
                  View In Map
                </div> */}
              </a>

              {/* Shop Name */}
              <div className="px-2 flex-grow">
                <h3 className=" font-bold text-center text-gray-800 tracking-wide capitalize  font-heading mb-3 line-clamp-1">
                  {outlet.name}
                </h3>

                {/* Address */}
                <div className="flex items-start justify-center gap-2 text-[#4A3D36] font-body text-[1rem] mb-2">
                  <MapPin className="text-[#611082] shrink-0 mt-1" size={18} />
                  <p className="leading-relaxed line-clamp-2">
                    {outlet.address}
                  </p>
                </div>
              </div>

              </div>
          ))}
        </div>

   
      </div>
           {/* Toggle Button */}
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => setVisibleCount(visibleCount < allOutlets.length ? allOutlets.length : 8)}
            className="group flex flex-col items-center gap-1"
          >
            <div className="px-8 py-3 bg-white shadow-sm border border-gray-200 rounded-full font-heading font-bold text-gray-800 tracking-wider uppercase text-sm hover:shadow-md hover:border-gold/50 transition-all duration-300">
              {visibleCount < allOutlets.length ? "Show More" : "Show Less"}
            </div>
            <div className={`mt-1 text-gold transition-transform duration-300 ${visibleCount >= allOutlets.length ? 'rotate-180' : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </button>
        </div>
    </section>
  );
};

export default Outlets;
