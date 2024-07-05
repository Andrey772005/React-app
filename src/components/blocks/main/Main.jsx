import React from 'react';
import {MainPage} from "./styles";
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