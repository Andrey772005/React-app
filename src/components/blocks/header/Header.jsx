import React from 'react';
import {BurgerMenu} from "../../burger/Burger";
import MainHeader from "./styles";

function Header() {
  return (
    <>
      <MainHeader>
        <BurgerMenu/>
      </MainHeader>
    </>
  )
}

export default Header;