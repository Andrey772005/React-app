import React from 'react';
import {MainPage} from "./styles";
import Main from "../../../assets/main.jpg";
import {Img} from "../../../styled/img/Image";

function PageWrapper() {
  return (
    <MainPage>
      <figure>
        <Img src={Main}></Img>
        <figcaption>
          Каждый человек в этом мире ищет главное &ndash; счастье, любовь и гармонию с самим собой. Наша задача помочь
          каждому из вас обрести главного человека в своей жизни &ndash; себя!
        </figcaption>
      </figure>
    </MainPage>

  );
}

export default PageWrapper;