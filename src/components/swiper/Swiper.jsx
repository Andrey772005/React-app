import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Foto1 from "../../assets/1.webp";
import Foto2 from "../../assets/2.webp";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function SwiperSlider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src={Foto1} alt="foto1"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Foto2} alt="foto2"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
