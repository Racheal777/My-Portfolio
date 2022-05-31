import React from "react";
import Navbarr from "../Controllers/Navbar";
import About from "./about";
import Projects from "./projects";
import {  Row, Col, Container } from "react-bootstrap";

export default function Index() {
  return (
    <div>
      {/* <Container fluid> */}
        <Row>
          <Col>
            <header>
              <Navbarr />

              <Row className="header">
                <Col sm={7} md={7}>
                  <div className="text">
                    <h2>
                      {" "}
                      Hello,{" "}
                      <span>I’m Racheal Kuranchie, A software developer</span>
                    </h2>
                    <button>Hire me</button>
                  </div>
                </Col>

                <Col sm={5} md={5}>
                  <div className="img">
                    <img src="" alt="picture"></img>
                  </div>
                </Col>
              </Row>
            </header>
          </Col>
        </Row>
      {/* </Container> */}

      <section>
          <About/>
      </section>

      <section>
          <Projects/>
      </section>
    </div>
  );
}
