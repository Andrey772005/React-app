import React, { useState } from "react";
import { Container, BurgerIcon, Line, Menu, MenuItem } from "./styles-alt";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <BurgerIcon onClick={toggleMenu}>
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
      </BurgerIcon>
      <Menu isOpen={isOpen}>
        <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#">About</MenuItem>
        <MenuItem href="#">Contact</MenuItem>
        <MenuItem href="#">Blog</MenuItem>
        <MenuItem href="#">Login</MenuItem>
      </Menu>
    </Container>
  );
};

export BurgerMenu;


// import React from "react";
// import BurgerMenu from "./BurgerMenu";
//
// export default function App() {
//   return (
//     <div className="App">
//       <BurgerMenu />
//     </div>
//   );
// }