import {
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FaServer, FaMobileAlt } from "react-icons/fa";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: FaServer,
    title: "Backend",
    description: "Developing robust APIs and server-side logic with Golang, Node.js, and Python.",
    iconLetter: "g", // gunakan huruf 'g' untuk icon ini
  },
  {
    Icon: RxDesktop,
    title: "Frontend",
    description: "Building responsive and interactive web applications using Next.js and React.",
  },
  {
    Icon: FaMobileAlt,
    title: "Mobile",
    description: "Creating cross-platform mobile applications with Flutter and Kotlin.",
  },
  {
    Icon: RxRocket,
    title: "DevOps",
    description: "Streamlining deployment and operations using Docker, Grafana, and CI/CD pipelines.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => {
        const IconComponent = item.Icon;
        return (
          <SwiperSlide key={i}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4 flex items-center justify-center">
                {item.iconLetter ? (
                  <span className="font-bold text-4xl lowercase">{item.iconLetter}</span>
                ) : (
                  <IconComponent aria-hidden />
                )}
              </div>

              {/* title & description */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>

              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                  aria-hidden
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
