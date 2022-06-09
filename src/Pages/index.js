import React from "react";
import Navbarr from "../Controllers/Navbar";
import image from "../images/pic1.jpg";
import Footer from "../Controllers/Footer";
import image2 from "../images/pic2.png";
import accra from '../images/accra.png'

export default function Index() {
  return (
    <div className=" md:mx-auto">
      <header>
        <Navbarr />

        <div className="header flex-1 md:flex py-4 px-4 md:py-8 justify-around m-8">
          <div className="text basis-1/2 md:basis-1/2 items-center justify-center text-center md:text-left  ">
            <h2 className=" w-full">
              {" "}
              Hello, <br></br>
              <span>
                I’m Racheal Kuranchie<br></br>{" "}
                <span> A Software Engineer.</span>
              </span>
            </h2>

            <div>
              <a
                href="https://www.linkedin.com/in/racheal-kuranchie"
                target="_blank"
                className="icon p-3"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/RachealKuranch2"
                target="_blank"
                className="icon p-3"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://github.com/Racheal777"
                target="_blank"
                className="icon p-3"
              >
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://medium.com/@rachealkuranchie"
                target="_blank"
                className="icon p-3"
              >
                <i class="fa-brands fa-medium"></i>
              </a>
            </div>
            <button className ="animate-bounce" > <a href="/" >Hire me</a></button>
          </div>

          <div className="img basis-1/4 md:basis-1/3 items-center justify-center   p-0 md:w-full  ">
            <img
              src={image2}
              alt="picture"
              className="h-96 w-full md:w-full  justify-center"
            ></img>
          </div>
        </div>
      </header>

      {/* </Container> */}
      <section className="flex-1 md:flex py-4 px-4 md:py-8 justify-around">
        <div className="basis-1/4 md:basis-1/3 md:w-1/4  md:basis-1/2 bg-image m-8 ">
          <img src={image} alt="pic" className="w-full"></img>
        </div>

        <div className=" basis-1/2 md:basis-1/2  ">
          <h2 className="font-bold ">About</h2>
          <p>
            Lörem ipsum heterov lynat paramun. Gälig poprens etira på anas:
            mingen. Bek kokrosamma infrar. Ynt äktigt isk. Pon favis panektig.
            Soliga astroling att mikrosk i influerare.
            <br></br>
            Lad monodat wikiläcka. Spedigisk vetretest i raren fön och nysogisk.
            Or hyposamma spest. Byfaktigt oliga bebagt vektigt.
            <br></br>
            Kagon beck koscheria kans för kropp. Stenons nyfägen bekagon semick.
            Benerar sobarade de nyv laras sarade.

            <br></br>
            Kagon beck koscheria kans för kropp. Stenons nyfägen bekagon semick.
            Benerar sobarade de nyv laras sarade.
          </p>
          {/* <button className="btns">Read more</button> */}
        </div>
      </section>

      {/* <section>
          <About/>
      </section> */}

      <section className="justify-center items-center projects">
        <h2 className="font-bold ">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 place-content-center m-8 px-4">
          <div className="bg-images  md:px-4 py-4 ">
            <img
              src={accra}
              alt="picture"
              className=" w-full md:w-full  justify-center"
            ></img>
            <button className="btns hover:bg-fuchsia-700"><a href="/project">View Project</a></button>
          </div>

          <div className="bg-images md:px-4 py-4">
            <img
              src={accra}
              alt="picture"
              className=" w-full  md:w-full  justify-center"
            ></img>
            <button className="btns hover:bg-fuchsia-700"><a href="/project">View Project</a></button>
          </div>

          <div className="bg-images md:px-4 py-4 ">
            <img
              src={accra}
              alt="picture"
              className=" w-full md:w-full  justify-center "
            ></img>
            <button className="btns hover:bg-fuchsia-700"><a href="/project">View Project</a></button>
          </div>
        </div>

        <div className="view">
        <button className="btnz hover:"><a href="/project" className="text-violet-700">View More</a></button>
        </div>

        
      </section>

      <section className="projects-section text-center">
        <h2 className="font-bold ">Skills</h2>
        <div className="grid grid-cols-2 gap-4 grid-rows-4 md:grid-cols-2 place-content-center m-2">
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

      <section className=" download justify-center items-center">
        <div className="grid grid-cols-2 gap-0   md:grid-cols-2 place-content-center m-8   ">
          <div>
            <button className="btnz hover:">Download CV</button>
          </div>
          <div>
            <button className="btnz hover:"><a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsmCKLCLhmDmRfKKsMFtFtHnzRJpddksgGgvKZcSxFZsMncwwLkkqgDDVGcqDjQCpBCdPJLg" target='_blank'>Get in Touch</a></button>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
      {/* <section>
          <Projects/>
      </section> */}
    </div>
  );
}
