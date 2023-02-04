import React from 'react';
import {MainPage} from "./styles";
import Main from "../../../assets/main.jpg";
import {Img} from "../../../styled/img/Image";
import {Figure} from "../../../styled/figure/Figure";
import SwiperSlider from "../../swiper/Swiper";

function PageWrapper() {
  return (
    <MainPage>
      <Figure>
        <Img src={Main}></Img>
        <figcaption>
          Каждый человек в этом мире ищет главное &ndash; счастье&#x0002C; любовь и гармонию с самим собой&#x0002E; Наша задача помочь
          каждому из вас обрести главного человека в своей жизни &ndash; себя&#x00021;
        </figcaption>
      </Figure>
      <SwiperSlider/>
    </MainPage>

  );
}

export default PageWrapper;