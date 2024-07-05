import React from 'react';
import {BurgerMenu} from "../../burger/Burger";
import { MainLogo } from '../../logo/Logo';
import MainHeader from "./styles";

function Header() {
  return (
    <>
      <MainHeader>
        <BurgerMenu/>
        <MainLogo/>
      </MainHeader>
    </>
  )
}

export default Header;