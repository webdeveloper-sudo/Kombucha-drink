import { useState } from "react";
import Heading from "./ui/Heading";
import { MapPin, ExternalLink, ChevronDown } from "lucide-react";

const Outlets = () => {
  const allOutlets = [
    {
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600",
      name: "White Town Organic Cafe",
      address: "12 Rue de la Marine, White Town, Pondicherry",
      mapLink: "https://maps.google.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=600",
      name: "Auroville Bakery & Store",
      address: "Auroville Main Road, Kuilapalayam, Auroville",
      mapLink: "https://maps.google.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600",
      name: "Heritage Supermarket",
      address: "MG Road, Heritage Town, Pondicherry",
      mapLink: "https://maps.google.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600",
      name: "Besant Nagar Resto",
      address: "2nd Avenue, Besant Nagar, Chennai",
      mapLink: "https://maps.google.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&q=80&w=600",
      name: "Alwarpet Organic Mart",
      address: "TTK Road, Alwarpet, Chennai",
      mapLink: "https://maps.google.com",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&q=80&w=600",
      name: "Indiranagar Health Stores",
      address: "100ft Road, Indiranagar, Bangalore",
      mapLink: "https://maps.google.com",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, allOutlets.length));
  };

  return (
    <section
      className="py-20 relative w-full overflow-hidden bg-white"
      style={{
        backgroundImage: "url('/src/assets/images/bg/graybg.jpg')",
        backgroundColor: "#F5F5F5",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <Heading
          title1="Our"
          title2="Outlets"
          subtitle="Find Us"
          textAlignment="center"
          titleColor="text-gray-800"
          subtitleColor="text-gray-800"
        />

        <p className="text-center text-[#4A3D36] max-w-2xl mx-auto mb-16 text-[1.1rem]">
          Grab your favorite Hope Life Kombucha at these verified retail and
          cafe locations near you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {allOutlets.slice(0, visibleCount).map((outlet, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-56 rounded-md overflow-hidden mb-6 relative">
                <img
                  src={outlet.image}
                  alt={outlet.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                
                {/* See In Map Overlay */}
                <a
                  href={outlet.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-[#611082] backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold tracking-widest text-[10px] uppercase hover:text-white transition-colors duration-300 shadow-md group-hover:shadow-lg"
                >
                  <ExternalLink size={14} />
                  View In Map
                </a>
              </div>

              {/* Shop Name */}
              <div className="px-2 flex-grow">
                <h3 className="text-[1.3rem] font-bold text-center text-gray-800 tracking-wide uppercase font-heading mb-3 line-clamp-1">
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

        {/* See More Button */}
        {visibleCount < allOutlets.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleSeeMore}
              className="flex text-sm items-center gap-2 border-2 border-gray-400 text-gray-800 py-2 px-8 rounded-full font-bold tracking-[0.2em] uppercase hover:bg-light-gray hover:text-gray-800 transition-all duration-300 shadow-sm"
            >
              See More <ChevronDown size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Outlets;
