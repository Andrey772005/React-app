import styled from "styled-components";

const Header = styled.header`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
`;

export default Header;