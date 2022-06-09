import React from "react";
import image from "../images/pic1.jpg";
import accra from '../images/accra.png'
import movie from '../images/screen.png'
import Navbarr from "../Controllers/Navbar";
import Footer from "../Controllers/Footer";

export default function Projects() {
  return (
    <div className=" md:mx-auto project">
      <header>
        <Navbarr />

        <section className="header flex-1 md:flex py-4 px-4 md:py-8 justify-around m-8">
          <div className="text basis-1/2 md:basis-1/2 items-center justify-center sm:text-center md:text-left  ">
            <h2 className="font-bold text-violet-700 ">Discover Accra App</h2>
            <p>
              Discover Accra Project is an ongoing fullstack application built with
              React.js and Tailwind css for the frontend,Express.js for the backend
              and PostgreSQL for the database.
              <br></br>
              This project is about discovering all the basic neccessities in 
              Accra such as Hotels, Restaurants, Beaches, Adventure sites etc.
              Users get to see top rated locations, add reviews to various locations,
              add a bucket list, etc. 
              <br></br>
              The purpose of this application is to ease the burden of navigating your 
              your way around the city and also getting access to the top rated locations.
              
            </p>
            <div>
            <a
                href="https://github.com/Racheal777"
                target="_blank"
                className="icon p-3"
              >
                <i class="fa-brands fa-github"></i>GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/racheal-kuranchie"
                target="_blank"
                className="icon p-3"
              >
                <i class="fa-brands fa-linkedin"></i>LinkdIn post
              </a>
            </div>
            <button className="btnz hover:"> <a href="https://discover-accra.vercel.app/" target='_blank'>View Project</a></button>
          </div>

          <div className="basis-1/4 md:basis-1/3 md:w-1/4  md:basis-1/2 bg-image m-8 ">
            <img src={accra} alt="pic" className="w-full"></img>
          </div>
        </section>
      </header>

      <section className="header flex-1 md:flex py-4 px-4 md:py-8 justify-around m-8">
      <div className="basis-1/4 md:basis-1/3 md:w-1/4  md:basis-1/2 bg-image m-8 ">
            <img src={image} alt="pic" className="w-full"></img>
          </div>
          
          <div className="text basis-1/2 md:basis-1/2 items-center justify-center sm:text-center md:text-left  ">
            <h2 className="font-bold text-violet-700">Shopping List App</h2>
            <p>
              Lörem ipsum heterov lynat paramun. Gälig poprens etira på anas:
              mingen. Bek kokrosamma infrar. Ynt äktigt isk. Lad monodat
              wikiläcka. Spedigisk vetretest i raren fön och nysogisk. Or
              hyposamma spest. Byfaktigt oliga bebagt vektigt. Pyr teskap att
              täde denas. Bioligt bende eftersom junebelt om cookie i goras.
              Låmid pårende bebel låligt kan.
            </p>
            <div>
            <a
                href="https://github.com/Racheal777"
                target="_blank"
                className="icon p-3"
              >
                <i class="fa-brands fa-github"></i>GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/racheal-kuranchie"
                target="_blank"
                className="icon p-3"
              >
                <i class="fa-brands fa-linkedin"></i>LinkdIn post
              </a>
            </div>
            <button className="btnz hover:">View Project</button>
          </div>

          
        </section>

        <header>
        

        <section className="header flex-1 md:flex py-4 px-4 md:py-8 justify-around m-8">
          <div className="text basis-1/2 md:basis-1/2 items-center justify-center sm:text-center md:text-left  ">
            <h2 className="font-bold text-violet-700 ">Todo App </h2>
            <p>
              Lörem ipsum heterov lynat paramun. Gälig poprens etira på anas:
              mingen. Bek kokrosamma infrar. Ynt äktigt isk. Lad monodat
              wikiläcka. Spedigisk vetretest i raren fön och nysogisk. Or
              hyposamma spest. Byfaktigt oliga bebagt vektigt. Pyr teskap att
              täde denas. Bioligt bende eftersom junebelt om cookie i goras.
              Låmid pårende bebel låligt kan.
            </p>
            <div>
            <a
                href="https://github.com/Racheal777"
                target="_blank"
                className="icon p-3"
              >
                <i class="fa-brands fa-github"></i>GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/racheal-kuranchie"
                target="_blank"
                className="icon p-3"
              >
                <i class="fa-brands fa-linkedin"></i>LinkdIn post
              </a>
            </div>
            <button className="btnz hover:">View Project</button>
          </div>

          <div className="basis-1/4 md:basis-1/3 md:w-1/4  md:basis-1/2 bg-image m-8 ">
            <img src={image} alt="pic" className="w-full"></img>
          </div>
        </section>
      </header>

      <section className="header flex-1 md:flex py-4 px-4 md:py-8 justify-around m-8">
      <div className="basis-1/4 md:basis-1/3 md:w-1/4  md:basis-1/2 bg-image m-8 ">
            <img src={movie} alt="pic" className="w-full"></img>
          </div>
          
          <div className="text basis-1/2 md:basis-1/2 items-center justify-center sm:text-center md:text-left  ">
            <h2 className="font-bold text-violet-700">Movie App</h2>
            <p>
              Lörem ipsum heterov lynat paramun. Gälig poprens etira på anas:
              mingen. Bek kokrosamma infrar. Ynt äktigt isk. Lad monodat
              wikiläcka. Spedigisk vetretest i raren fön och nysogisk. Or
              hyposamma spest. Byfaktigt oliga bebagt vektigt. Pyr teskap att
              täde denas. Bioligt bende eftersom junebelt om cookie i goras.
              Låmid pårende bebel låligt kan.
            </p>
            <div>
            <a
                href="https://github.com/Racheal777"
                target="_blank"
                className="icon p-3"
              >
                <i class="fa-brands fa-github"></i>GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/racheal-kuranchie"
                target="_blank"
                className="icon p-3"
              >
                <i class="fa-brands fa-linkedin"></i>LinkdIn post
              </a>
            </div>
            <button className="btnz hover:">View Project</button>
          </div>

          
        </section>

<header>
<section className="git">
          <div>
            <p>Visit my github to view more projects</p>
            <a
                href="https://github.com/Racheal777"
                target="_blank"
                className="icon p-3"
              >
                <i class="fa-brands fa-github"></i>GitHub
              </a>
          </div>
        </section>
</header>
        


        <Footer/>
    </div>
  );
}
