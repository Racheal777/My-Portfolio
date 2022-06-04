import React from "react";
import Navbarr from "../Controllers/Navbar";
import About from "./about";
import Projects from "./projects";
import {  Row, Col, Container } from "react-bootstrap";
import Navigation from "../Controllers/Navigation";
import Example from "../Controllers/Navigation";
import image from '../images/pic1.jpg'
import image2 from '../images/pic2.png'

export default function Index() {
  return (
    <div className=" md:mx-auto">
      
        
            <header>
              {/* <Example/> */}
              <Navbarr />

              <div className="header flex-1 md:flex py-4 px-4 md:py-8">
                
                  <div className="text basis-1/2 md:basis-1/2  ">
                    <h2 className="md:w-96 w-full">
                      {" "}
                      Hello,{" "}
                      <span>I’m Racheal Kuranchie, A software developer</span>
                    </h2>
                    <button>Hire me</button>
                  </div>
               

                
                  <div className="img flex w-1/3 h-full">
                    
                    <img src={image2} alt="picture" className="h-96"></img>
                    
                    
                  </div>
                  
                </div>
            </header>
          
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
