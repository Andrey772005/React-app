import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: auto;
  width: 100%;
  text-align: center;
  padding: 2rem;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    text-align: center;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    z-index: 102;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #343078;
      z-index: 103;
    }
    
    // Удалить код ниже при использовании статей //
    
    &:first-child {
      opacity: 0.2;
    }
  }
`
export const StyledBurger = styled.button`
  position: absolute;
  top: 2.5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.285rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#333333'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`