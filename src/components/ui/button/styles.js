import styled from "styled-components";

const StyledButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    display: block;
    width: 60px;
    height: 50px;
    border: none;
    
    &::before {
      content: "";
      position: absolute;
      top: 22px;
      left: 17px;
      width: 18px;
      height: 2px;
      background-color: #000000;
      box-shadow: 0 6px 0 0 #000000, 0 12px 0 0 #000000;
    }
`;

export default StyledButton;