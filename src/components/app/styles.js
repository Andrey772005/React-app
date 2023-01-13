import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
	min-height: 100%;
  margin-left: calc(100vw - 100%)
}

body,
html {
	margin: 0;
}

body {
	position: relative;
	min-height: 100%;
  margin-left: calc(100vw - 100%);
  font-family: ${(props) => props.theme.fontFamily};
	font-style: normal;
	font-weight: 400;
	font-size: ${(props) => props.theme.fontSizeDefault};
	line-height: 1.5;
	color: ${(props) => props.theme.textColor};
}
`;

export default GlobalStyle;