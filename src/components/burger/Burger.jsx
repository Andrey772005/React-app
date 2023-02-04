import React from 'react';
import {StyledMenu} from "./styles";
import {StyledBurger} from "./styles";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">💁🏻‍♂</span>
        Статьи
      </a>
      <a href="/">
        <span role="img" aria-label="price">💸</span>
        Обо мне
      </a>
      <a href="/">
        <span role="img" aria-label="contact">📩</span>
        Контакты
      </a>
    </StyledMenu>
  )
}

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export const BurgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div ref={node}>
      <Menu open={open} setOpen={setOpen} />
      <Burger open={open} setOpen={setOpen} />
    </div>
  )
}
