import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 300px;
  margin: 0;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
`;

export default Header;