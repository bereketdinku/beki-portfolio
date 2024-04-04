"use client";
import { portfolios } from "@/constants";
import { useWindowSize } from "@/hook/useWindowSize";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PortfolioItem from "./PortfolioItem";
const PortfolioSection = ({
  data,
  title,
}: {
  data: typeof portfolios;
  title: string;
}) => {
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
      <div className="pb-3 border-b border-peach flex justify-between items-center">
        <p>{title} </p>
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
          spaceBetween={20}
          slidesPerView={slidePerView}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {data.map((portfolio, index) => (
            <SwiperSlide key={index}>
              <PortfolioItem portfolio={portfolio} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PortfolioSection;
