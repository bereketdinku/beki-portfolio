"use client";

import { reviews } from "@/constants";
import SectionHeading from "./SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SingleReview from "./SingleReview";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@/hook/useWindowSize";
const TestimonialSection = () => {
  const swiperRef = useRef<SwiperType>();
  const [slidePerView, setSlidePerView] = useState(3);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width < 768) {
      setSlidePerView(1);
    } else if (width < 1268) {
      setSlidePerView(2);
    } else {
      setSlidePerView(2);
    }
  }, [width]);
  return (
    <section className="max-width section-padding">
      <SectionHeading title="What my clients say about me" subtitle="" />
      <div>
        <div className="pb-3 border-b border-peach flex justify-between items-center">
          <p>{reviews.length} total reviews</p>
          <div>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-peach-200 border border-peach p-1 rounded text-grey-700"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-peach-200 border border-peach p-1 rounded text-grey-700"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="pt-8">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={slidePerView}
            loop={true}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <SingleReview review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
