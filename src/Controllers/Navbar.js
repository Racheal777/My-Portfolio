import React from "react";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../App.css";
import "../nav.css";

export default function Navbarr() {
  return (
    <div>
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
                    Projects
                  </Nav.Link>
                  <Nav.Link href="/admin" className="text-dark">
                    Articles
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
}
