import React from "react";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../App.css";
import "../nav.css";
import { Animator, ScrollContainer, ScrollPage, batch, Fade,FadeUp, FadeIn,
  FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut,
   Zoom, ZoomIn, ZoomOut, ZoomInScrollOut } from "react-scroll-motion";

export default function Navbarr() {
  return (
    <div>

<ScrollContainer>


{/* <ScrollPage> */}
    {/* <Animator animation={batch( Sticky(), )}> */}
      
   
      <nav className="sticky">
        <Navbar
          expand="lg"
          fixed="top"
          sticky="top"
          collapseOnSelect
          className="navy"
        >
          <Container fluid>
            <div className="logos">
              <Nav.Link href="/">Racheal Portfolio.</Nav.Link>
            </div>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div className="Nav">
                <Nav navbarScroll>
                  <Nav.Link href="/" className="text-dark">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/" className="text-dark">
                    About
                  </Nav.Link>
                  <Nav.Link href="/project" className="text-dark">
                    My Projects
                  </Nav.Link>
                  <Nav.Link href="/article" className="text-dark">
                    Articles
                  </Nav.Link>

                  <Nav.Link href="/article" className="text-dark">
                    Get in Touch
                  </Nav.Link>
                </Nav>

              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
      {/* </Animator> */}
  {/* </ScrollPage> */}
      </ScrollContainer>
    </div>
  );
}
