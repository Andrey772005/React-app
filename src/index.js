// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/app/App';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from "react";
import { createRef } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, NavLink, useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Main from "./components/blocks/main";
import About from "./components/blocks/about";
import Contact from "./components/blocks/contact";
import './bootstrap.css';
import './styles.css'

const routes = [
  { path: '/',
    name: 'Main',
    element: <Main />,
    nodeRef: createRef()
  },
  { path: '/about',
    name: 'About',
    element: <About />,
    nodeRef: createRef()
  },
  { path: '/contact',
    name: 'Contact',
    element: <Contact />,
    nodeRef: createRef(),
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <ReactTransitionGroup />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

function ReactTransitionGroup() {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <div>
      <Navbar bg="light">
        <Nav className="mx-auto">
          {routes.map((route) => (
            <Nav.Link
              key={route.path}
              as={NavLink}
              to={route.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end
            >
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
      <Container className="container">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {() => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </Container>
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RouterProvider router={router} />)
