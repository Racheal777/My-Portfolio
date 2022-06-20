import React from "react";
import Navbarr from "../Controllers/Navbar";
import image from "../images/pic1.jpg";
import Footer from "../Controllers/Footer";
import image2 from "../images/pic2.png";
import movie from "../images/screen.png";
import accra from "../images/accra.png";
import pal from "../images/pal.png";
import black from "../images/black.png";
import recipe from "../images/recipe.png";
import school from "../images/school.png";
import Header from "../Controllers/Header";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

export default function Index() {
  const ZoomInScrollOut = batch( MoveIn(), Fade(), MoveOut(0, -200));
  const FadeUp = batch(MoveIn(),Fade() );
  return (
    <div className=" md:mx-auto">
      <ScrollContainer>
        <header>
          <Navbarr />

          <Header />
        </header>

        {/* </Container> */}
        
            <section className="flex-1 md:flex py-4 px-4 md:py-4 justify-around">
              <div className="basis-1/4 md:basis-1/3 md:w-1/4  md:basis-1/2 bg-image m-4 ">
                <img src={image} alt="pic" className="w-full"></img>
              </div>

              <div className=" basis-1/2 md:basis-1/2  ">
                <h2 className="font-bold ">About</h2>
                <p>
                  Lörem ipsum heterov lynat paramun. Gälig poprens etira på
                  anas: mingen. Bek kokrosamma infrar. Ynt äktigt isk. Pon favis
                  panektig. Soliga astroling att mikrosk i influerare.
                  <br></br>
                  Lad monodat wikiläcka. Spedigisk vetretest i raren fön och
                  nysogisk. Or hyposamma spest. Byfaktigt oliga bebagt vektigt.
                  <br></br>
                  Kagon beck koscheria kans för kropp. Stenons nyfägen bekagon
                  semick. Benerar sobarade de nyv laras sarade.
                  <br></br>
                  Kagon beck koscheria kans för kropp. Stenons nyfägen bekagon
                  semick. Benerar sobarade de nyv laras sarade.
                  <br></br>
                  Kagon beck koscheria kans för kropp. Stenons nyfägen bekagon
                  semick. Benerar sobarade de nyv laras sarade.
                </p>
                {/* <button className="btns">Read more</button> */}
              </div>
            </section>
          

        {/* <section>
          <About/>
      </section> */}
        
            <section className="justify-center items-center projects pb-5">
              <h2 className="font-bold ">Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 place-content-center m-4 px-2">
              
                <div className="bg-images  md:px-4 py-4 ">
                  <img
                    src={pal}
                    alt="picture"
                    className=" w-full md:w-full  justify-center"
                  ></img>
                  <p>This is a black jack game</p>

                  <div className="icons flex md:flex py-4 px-4 justify-center">
                    <p>
                      <i className="fa-brands fa-js px-2 m-2 bg-yellow-500 text-xl"></i>
                    </p>
                    <p>
                      <i className="fa-brands fa-html5 px-2 m-2 bg-rose-500 text-xl"></i>
                    </p>
                    <p>
                      <i className="fa-brands fa-css3 px-2 m-2 bg-blue-700 text-xl"></i>
                    </p>
                  </div>
                  <button className="btns hover:bg-fuchsia-700">
                    <a href="/project">View Project</a>
                  </button>
                </div>
                

        
                <div className="bg-images md:px-4 py-4">
                  <img
                    src={movie}
                    alt="picture"
                    className=" w-full  md:w-full  justify-center"
                  ></img>
                  <p>This is a black jack game</p>

                  <div className="icons flex md:flex py-4 px-4 justify-center">
                    <p>
                      <i className="fa-brands fa-js px-2 m-2 bg-yellow-500 text-xl"></i>
                    </p>
                    <p>
                      <i className="fa-brands fa-html5 px-2 m-2 bg-rose-500 text-xl"></i>
                    </p>
                    <p>
                      <i className="fa-brands fa-css3 px-2 m-2 bg-blue-700 text-xl"></i>
                    </p>
                  </div>
                  <button className="btns hover:bg-fuchsia-700">
                    <a href="/project">View Project</a>
                  </button>
                </div>
                

        
                <div className="bg-images md:px-4 py-4 ">
                  <img
                    src={black}
                    alt="picture"
                    className=" w-full md:w-full  justify-center "
                  ></img>
                  <p>This is a black jack game</p>

                  <div className="icons flex md:flex py-4 px-4 justify-center">
                    <p>
                      <i className="fa-brands fa-js px-2 m-2 bg-yellow-500 text-xl"></i>
                    </p>
                    <p>
                      <i className="fa-brands fa-html5 px-2 m-2 bg-rose-500 text-xl"></i>
                    </p>
                    <p>
                      <i className="fa-brands fa-css3 px-2 m-2 bg-blue-700 text-xl"></i>
                    </p>
                    <p><i class="fa-brands fa-react px-2 m-2 bg-blue-700 text-xl"></i></p>
                  </div>
                  <button className="btns hover:bg-fuchsia-700">
                    <a href="/project">View Project</a>
                  </button>
                </div>
                
              </div>
             

              <div className="view">
                <button className="animate-bounce btnz bg-gradient-to-r hover:from-cyan-500 hover:to-bg-fuchsia-700">
                  <a href="/project" className="text-violet-700">
                    View More
                  </a>
                </button>
              </div>
            </section>
          

        
          <h2 className="font-bold text-center m-3">Articles</h2>
            <section className=" article flex-1 md:flex py-4 px-4 md:py-4 justify-around">
              

              <div className=" basis-1/2 md:basis-1/2  ">
                <h2 className="font-medium ">Node.js Authentication with PostgreSQL, Sequelize and Express.js</h2>
                <p>
                In this article, we are going to discuss user
                 registration and login by setting cookies with 
                 Cookie-Parser and JSON Web Token(JWT) using PostgreSQL
                  as the database with Sequelize as Object Relational Mapper
                  (ORM) and Express.js for the server.


                  <br></br>
                  <strong>Understanding the Concepts</strong>
                  <br></br> User registration
                   is one of the relevant steps in an application,
                    thus the concept of authentication and authorizatio,    
                  <a href="https://medium.com/@rachealkuranchie/node-js-authentication-with-postgresql-sequelize-and-express-js-20ae773da4c9" target='_blank'>Read More</a>
                </p>

                {/* <button className="btns">Read more</button> */}
              </div>
              <div className="basis-1/4 md:basis-1/3 md:w-1/4  md:basis-1/2  m-4 ">
                <img src={image} alt="pic" className="w-full"></img>
              </div>
            </section>
          

        
            <section className=" article flex-1 md:flex py-4 px-4 md:py-4 justify-around">
              

              <div className=" basis-1/2 md:basis-1/2  ">
                <h2 className="font-medium ">Email Verification with Nodemailer 
                using Sequelize, PostgreSQL, and Express.js</h2>
                <p>
                Every application requires strong authentication, 
                which includes email verification. Email verification is 
                a structure set up to ensure that a system does not heap 
                its database with fake email accounts, making it a critical
                 feature in every application for security purposes 
                 and business growth.
                  <br></br>
                  To ensure your database is clean and you are
                   interacting with real people and also guarantee 
                   your customers of security in your application,    
                  <a href="/ "target='_blank'>Read More</a>
                </p>

                {/* <button className="btns">Read more</button> */}
              </div>
              <div className="basis-1/4 md:basis-1/3 md:w-1/4  md:basis-1/2  m-4 ">
                <img src={image} alt="pic" className="w-full"></img>
              </div>
            </section>
          

        
            <header>
            <section className="projects-section text-center m-5 md:pb-4">
              <h2 className="font-bold ">Skills</h2>
              <div className=" grid grid-cols-2  grid-rows-4 md:grid-cols-2 place-content-center sm:text-sm">
                <li className="dot">JavaScript(Node.js)</li>

                <li className="dot">MySQL & PostgreSQL</li>

                <li className="dot">HTML & CSS</li>

                <li className="dot">Mongo DB</li>

                <li className="dot">Tailwind CSS</li>

                <li className="dot">Git & GitHub</li>

                <li className="dot">React.js & Redux</li>

                <li className="dot">Figma</li>
              </div>
            </section>
            </header>
         

        

        <section className=" download justify-center items-center">
          <div className="grid grid-cols-2 gap-0   md:grid-cols-2 place-content-center m-8   ">
            <div>
              <button className="btnz hover:">Download CV</button>
            </div>
            <div>
              <button className="btnz hover:">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsmCKLCLhmDmRfKKsMFtFtHnzRJpddksgGgvKZcSxFZsMncwwLkkqgDDVGcqDjQCpBCdPJLg"
                  target="_blank"
                >
                  Get in Touch
                </a>
              </button>
            </div>
          </div>
        </section>
        

        <section>
          <Footer />
        </section>
        {/* <section>
          <Projects/>
      </section> */}
      </ScrollContainer>
    </div>
  );
}
