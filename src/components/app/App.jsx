// import React, {Component} from "react";
// import {CSSTransition} from "react-transition-group";
// import Logo from "../ui/logo/Logo";
// import "./styles.css";
// import Main from "../blocks/main";
// import About from "../blocks/about";
// import {BrowserRouter, NavLink, Route} from "react-router-dom";
//
// const routes = [
//   { path: '/', Component: Main},
//   { path: '/about', Component: About},
// ]
//
// function App() {
//   return (
//     <BrowserRouter>
//       <AppWrapper>
//         <header>
//           <Logo />
//           <NavLink to="/">MAIN</NavLink>
//           <NavLink to="/about">ABOUT</NavLink>
//         </header>
//         {routes.map(({path, Component}) =>
//           <Route key={path} exact path={path}>
//             {({match}) =>
//               <CSSTransition>
//                 <Component/>
//               </CSSTransition>
//             }
//           </Route>
//         )}
//       </AppWrapper>
//     </BrowserRouter>
//   );
// }
//
// export default App;

