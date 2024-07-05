import React, {useState} from 'react';
import {StyledMenu, StyledBurger} from "./styles";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        {/*<span role="img" aria-label="about us">💁🏻‍♂</span>*/}
        Направления
      </a>
      <a href="/">
        {/*<span role="img" aria-label="price">💸</span>*/}
        Преподаватели
      </a>
      <a href="/">
        {/*<span role="img" aria-label="contact">📩</span>*/}
        Расписание
      </a>
      <a href="/">
        {/*<span role="img" aria-label="contact">📩</span>*/}
        Цены
      </a>
      <a href="/">
        {/*<span role="img" aria-label="contact">📩</span>*/}
        Контакты
      </a>
      <a href="/">
        {/*<span role="img" aria-label="contact">📩</span>*/}
        Личный кабинет
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
  const [open, setOpen] = useState(false);
//   const node = useRef();
  return (
    <>
      <Menu open={open} setOpen={setOpen} />
      <Burger open={open} setOpen={setOpen} />
    </>
  )
}
