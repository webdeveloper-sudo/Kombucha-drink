import React, { useEffect, useState, useRef } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const generalSpecialties = [
  "Anxiety",
  "Depression",
  "Trauma",
  "Relationship Issues",
  "Stress",
  "Grief",
  "Addiction",
  "Self-Esteem",
  "PTSD",
  "OCD",
  "ADHD",
  "Family Therapy",
  "Child Counseling",
];

const TherapistListCarousel = () => {
  const [therapists, setTherapists] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [swiperRef, setSwiperRef] = useState<any | null>(null);
  const [activeDot, setActiveDot] = useState(0); // <-- ✅ add this

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const res = await axiosInstance.get("/api/auth/all-therapists");
        const therapistList = res.data.therapists || [];
        setTherapists(therapistList);
        // Collect unique categories from therapists
        const therapistCategories = new Set<string>();
        therapistList.forEach((th: any) => {
          if (th.categories) {
            th.categories.forEach((cat: string) =>
              therapistCategories.add(cat)
            );
          }
        });
        // Merge with generalSpecialties & dedupe
        const merged = Array.from(
          new Set([...generalSpecialties, ...therapistCategories])
        );
        setCategories(merged);
      } catch (err) {
        setTherapists([]);
        setCategories(generalSpecialties);
      }
    };
    fetchTherapists();
  }, []);

  // Handle scrolling categories (5 visible at once)
  const visibleCategories = categories.slice(startIndex, startIndex + 5);
  const handlePrev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setStartIndex((prev) => Math.min(prev + 1, categories.length - 5));

  // Filter therapists based on selected category
  const filteredTherapists = selectedCategory
    ? therapists.filter((th) => th.specialization?.includes(selectedCategory))
    : therapists;

  // Center the carousel on load or when therapists change (for correct centering with loop)
  useEffect(() => {
    if (swiperRef && filteredTherapists.length > 0) {
      const centerIndex = Math.floor(filteredTherapists.length / 2);
      swiperRef.slideToLoop(centerIndex, 0);
    }
  }, [swiperRef, filteredTherapists.length]);

  return (
    <div>
      {/* Inline styles */}
      <style>{`
        .category-scroll-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          gap: 12px;
        }
        .arrow-btn {
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 28px;
          font-weight: bold;
          display: flex;
          align-items: center;
          color: #844FA4;
          transition: 0.2s ease;
        }
        .arrow-btn:disabled {
          opacity: 0.24;
          cursor: not-allowed;
        }
        .category-badge {
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .category-badge.selected {
          background-color: #844FA4;
          color: white;
          border-color: #844FA4;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #844FA4;
          width: 15px;
          height: 15px;
        }
        .swiper-pagination-bullet {
          background: #844FA4;
          width: 13px;
          height: 13px;
        }
      `}</style>

      {/* Category Filter */}
      <div className="category-scroll-container">
        <button
          className="arrow-btn"
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          {"<"}
        </button>
        <Badge
          key="all"
          variant="outline"
          className={`rounded-full px-4 py-1 font-medium text-base category-badge ${
            selectedCategory === null ? "selected" : ""
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </Badge>
        {visibleCategories.map((cat) => (
          <Badge
            key={cat}
            variant="outline"
            className={`rounded-full px-4 py-1 font-medium text-base category-badge ${
              selectedCategory === cat ? "selected" : ""
            }`}
            onClick={() =>
              setSelectedCategory((prev) => (prev === cat ? null : cat))
            }
          >
            {cat}
          </Badge>
        ))}
        <button
          className="arrow-btn"
          onClick={handleNext}
          disabled={startIndex + 5 >= categories.length}
        >
          {">"}
        </button>
      </div>

      {/* Carousel */}
      <div className="py-12 bg-background flex justify-center">
        <div className=" w-full ">
          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            slidesPerView={"auto"} // 👈 show multiple cards
            centeredSlides={true}
            loop={true}
            slideToClickedSlide={true}
            spaceBetween={-2} // 👈 negative space gives that 3D overlap feel
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 80,
              depth: 180,
              modifier: 2,
              slideShadows: false,
            }}
            style={{ paddingBottom: 80 }}
            onSwiper={setSwiperRef}
          >
            {filteredTherapists.map((th) => (
              <SwiperSlide key={th._id} style={{ width: 400 }}>
                {" "}
                {/* 👈 fixed width */}
                <Card className="w-[300px] h-[360px] rounded-2xl overflow-hidden mx-auto shadow-lg hover:shadow-xl transition">
                  <CardContent className="flex flex-col items-center py-6 px-5">
                    {/* Profile */}
                    <div className="rounded-full overflow-hidden w-28 h-28 bg-muted mb-4 shadow">
                      <img
                        src={th.profileImage || "/assets/default-user.png"}
                        alt={th.name}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-semibold text-center mb-1">
                      {th.name}
                    </h3>

                    {/* Categories */}
                   

                    {/* Rating */}
                    <div className="font-semibold text-accent mb-3 text-sm">
                      ⭐ {th.rating ? th.rating.toFixed(1) : "N/A"} Rating
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground text-center">{th.description}</p>
                    </div>

                    <hr className="py-2"/>

                     <div className="flex flex-wrap gap-1 justify-center mb-3 max-h-14 overflow-hidden">
                      {th.specialization?.slice(0, 3).map((cat: string) => (
                        <Badge
                          key={cat}
                          variant="accent"
                          className="px-2 text-xs rounded-full"
                        >
                          {cat}
                        </Badge>
                      ))}
                      {th.categories?.length > 3 && (
                        <span className="text-xs text-muted-foreground">
                          +{th.categories.length - 3}
                        </span>
                      )}
                    </div>
                   
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Custom Prev/Next Arrows at bottom center */}
          <div className="flex justify-center items-center gap-4 ">
            <button
              onClick={() => swiperRef?.slidePrev()}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-accent/80 text-white font-bold text-lg shadow-md hover:bg-[#844FA4] transition duration-200 hover:scale-110"
            >
              {"<"}
            </button>
            <button
              onClick={() => swiperRef?.slideNext()}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-accent/80 text-white font-bold text-lg shadow-md hover:bg-[#844FA4] transition duration-200 hover:scale-110"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistListCarousel;