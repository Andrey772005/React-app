import React from 'react';
import {MainPage} from "./styles";
import Main from "../../../assets/main.webp";
import {Img} from "../../../styled/img/Image";
import {Figure} from "../../../styled/figure/Figure";
import SwiperSlider from "../../swiper/Swiper";

function PageWrapper() {
  return (
    <MainPage>
      <Figure>
      </Figure>
      <SwiperSlider/>
    </MainPage>

  );
}

export default PageWrapper;