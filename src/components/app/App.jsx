import React from "react";
import GlobalStyle from "./styles";
import { useMediaQuery } from 'react-responsive';
import Header from "../blocks/header/Header";
import { BurgerMenu } from "../burger/Burger";
import PageWrapper from "../blocks/main/Main";

 const Desktop = ({ children }) => {
   const isDesktop = useMediaQuery({ minWidth: 1200 })
   return isDesktop ? children : null
 }
 const Tablet = ({ children }) => {
   const isTablet = useMediaQuery({ minWidth: 969, maxWidth: 1199 })
   return isTablet ? children : null
 }
 const Mobile = ({ children }) => {
   const isMobile = useMediaQuery({ maxWidth: 968 })
   return isMobile ? children : null
 }

 const Adaptive = () => {
   return (
     <>
       <Desktop>Desktop or laptop</Desktop>
       <Tablet>Tablet</Tablet>
       <Mobile>
         <Header>
           <BurgerMenu/>
         </Header>
         <PageWrapper/>
       </Mobile>
     </>
   )
 }

 function App() {
   return (
    <>
      <GlobalStyle/>
      <Adaptive/>
    </>
   );
 }

 export default App;

