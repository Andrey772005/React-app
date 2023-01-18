import styled from "styled-components";

const Header = styled.header`
  width: 98%;
  height: 30px;
  margin: auto;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
`;

export default Header;