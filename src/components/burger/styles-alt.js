import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const BurgerIcon = styled.div`
  cursor: pointer;
  margin-right: 20px;
  width: 30px;
  height: 30px;
  position: relative;
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  position: absolute;
  left: 0;
  transition: all 0.2s ease-out;

  &:nth-child(1) {
    top: 0;
    transform: ${({ isOpen }) =>
  isOpen ? "rotate(45deg) translate(-5px, 5px)" : "none"};
  }

  &:nth-child(2) {
    top: 50%;
    transform: ${({ isOpen }) =>
  isOpen ? "translateX(-50%) scale(0)" : "translateY(-50%)"};
  }

  &:nth-child(3) {
    bottom: 0;
    transform: ${({ isOpen }) =>
  isOpen ? "rotate(-45deg) translate(-5px, -5px)" : "none"};
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  padding: 20px;
  width: 200px;
  border: 1px solid black;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const MenuItem = styled.a`
  display: block;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
`;