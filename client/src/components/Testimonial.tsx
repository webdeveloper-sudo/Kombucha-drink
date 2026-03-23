import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { QuoteIcon, Star } from "lucide-react";
import Heading from "./ui/Heading";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Yoga Instructor",
    content: "Hope Kombucha is absolutely incredible. The Turmeric Fusion has become a staple in my morning routine. It's perfectly balanced and never too sweet.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Fitness Enthusiast",
    content: "I've tried many kombucha brands, but the Ginger Zest from Hope is next level. The carbonation is spot on, and you can really taste the fresh ingredients.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Nutritionist",
    content: "As a nutritionist, I love seeing a brand that uses real botanical infusions without excessive sugar. Butterfly Pea is my absolute favorite afternoon pick-me-up.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Torres",
    role: "Café Owner",
    content: "We started stocking Hope Kombucha last month, and our customers can't get enough. The Elixir Blend sells out faster than we can restock it!",
    rating: 5,
  },
  {
    id: 5,
    name: "Jessica Walsh",
    role: "Wellness Coach",
    content: "The Rose Harmony flavor is so delicate and refreshing. I always recommend Hope Kombucha to my clients looking for a healthy, delicious alternative to soda.",
    rating: 5,
  },
];

const Testimonial = () => {
  const [ setSwiperRef] = useState<any | null>(null);

  return (
    <div id="testimonials" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      {/* Optional decorative background circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF852C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1B4D3E]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-10">
          <Heading 
            title1="Customer" 
            title2="Reviews" 
            subtitle="What people say" 
            textAlignment="center" 
            titleColor="text-gray-800" 
            subtitleColor="text-forest-green" 
          />
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          <style>{`
            .testimonial-pagination .swiper-pagination-bullet {
              background: #4A7C59;
              opacity: 0.5;
              width: 10px;
              height: 10px;
              transition: all 0.3s ease;
            }
            .testimonial-pagination .swiper-pagination-bullet-active {
              background: #1B4D3E;
              opacity: 1;
              width: 24px;
              border-radius: 8px;
            }
          `}</style>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".testimonial-pagination" }}
            onSwiper={setSwiperRef}
            className="w-full pb-16"
          >
            {testimonials.map((testi) => (
              <SwiperSlide key={testi.id} className="h-auto">
                <div className="h-full bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(27,77,62,0.1)] transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center group-hover:-translate-y-2 transition-all duration-300 group-hover:shadow-lg">
                      <QuoteIcon size={24} className="text-[#1B4D3E]/80" fill="currentColor" />
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-[#FEA800]" fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 font-body text-[15px] sm:text-[16px] italic leading-relaxed mb-8 flex-grow">
                    "{testi.content}"
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="font-heading text-xl md:text-2xl font-bold text-gray-800 mb-1">
                      {testi.name}
                    </h4>
                    <p className="text-[#FF852C] text-[12px] tracking-widest uppercase font-semibold">
                      {testi.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container */}
          <div className="testimonial-pagination flex justify-center gap-2 mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;