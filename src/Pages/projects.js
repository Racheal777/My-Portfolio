import React from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn,
   FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut,
    Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import image from "../images/pic1.jpg";
import accra from '../images/accra.png'
import planner from '../images/Screenshot 2022-06-13 at 12.12.00 PM.png'
import todo from '../images/Screenshot 2022-06-13 at 12.23.08 PM.png'
import list from '../images/Screenshot 2022-06-13 at 12.32.51 PM.png'
import shoe from '../images/shoes.png'
import article from '../images/article.png'
import movie from '../images/screen.png'
import Navbarr from "../Controllers/Navbar";
import Footer from "../Controllers/Footer";

export default function Projects() {
  const ZoomInScrollOut = batch(Fade(),  MoveOut(0, -200));
  const FadeUp = batch(MoveIn());
  return (
    <div className=" md:mx-auto project">
      <ScrollContainer>

      <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
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
            <div className="icons flex md:flex py-4 px-4 ">
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
            <button className="btnz hover:"> <a href="https://discover-accra.vercel.app/" target='_blank'>View Project</a></button>
          </div>

          <div className="basis-1/4 md:basis-1/3 md:w-1/4  md:basis-1/2 bg-image m-8 ">
            <img src={accra} alt="pic" className="w-full"></img>
            
          </div>
        </section>
      </header>
      </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
      <section className="header flex-1 md:flex py-4 px-4 md:py-8 justify-around m-8">
      <div className="basis-1/4 md:basis-1/3 md:w-1/4  md:basis-1/2 bg-image m-8 ">
            <img src={list} alt="pic" className="w-full"></img>
          </div>
          
          <div className="text basis-1/2 md:basis-1/2 items-center justify-center sm:text-center md:text-left  ">
            <h2 className="font-bold text-violet-700">Todo App</h2>
            <p>
              L??rem ipsum heterov lynat paramun. G??lig poprens etira p?? anas:
              mingen. Bek kokrosamma infrar. Ynt ??ktigt isk. Lad monodat
              wikil??cka. Spedigisk vetretest i raren f??n och nysogisk. Or
              hyposamma spest. Byfaktigt oliga bebagt vektigt. Pyr teskap att
              t??de denas. Bioligt bende eftersom junebelt om cookie i goras.
              L??mid p??rende bebel l??ligt kan.
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
            <div className="icons flex md:flex py-4 px-4 ">
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
            <button className="btnz hover:">View Project</button>
          </div>

          
        </section>
        </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
        <header>
        <section className="header flex-1 md:flex py-8 px-4 md:py-8  justify-around m-8">
          <div className="text basis-1/2 md:basis-1/2 items-center justify-center sm:text-center md:text-left  ">
            <h2 className="font-bold text-violet-700 ">Soft Life Planner </h2>
            <p>
              L??rem ipsum heterov lynat paramun. G??lig poprens etira p?? anas:
              mingen. Bek kokrosamma infrar. Ynt ??ktigt isk. Lad monodat
              wikil??cka. Spedigisk vetretest i raren f??n och nysogisk. Or
              hyposamma spest. Byfaktigt oliga bebagt vektigt. Pyr teskap att
              t??de denas. Bioligt bende eftersom junebelt om cookie i goras.
              L??mid p??rende bebel l??ligt kan.
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
            <img src={todo} alt="pic" className="w-full"></img>
          </div>
        </section>
      </header>
      </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
      <section className="header flex-1 md:flex py-4 px-4 md:py-8 justify-around m-8">
      <div className="basis-1/4 md:basis-1/3 md:w-1/4  md:basis-1/2 bg-image m-8 ">
            <img src={planner} alt="pic" className="w-full"></img>
          </div>
          
          <div className="text basis-1/2 md:basis-1/2 items-center justify-center sm:text-center md:text-left  ">
            <h2 className="font-bold text-violet-700">Shopping list App</h2>
            <p>
              L??rem ipsum heterov lynat paramun. G??lig poprens etira p?? anas:
              mingen. Bek kokrosamma infrar. Ynt ??ktigt isk. Lad monodat
              wikil??cka. Spedigisk vetretest i raren f??n och nysogisk. Or
              hyposamma spest. Byfaktigt oliga bebagt vektigt. Pyr teskap att
              t??de denas. Bioligt bende eftersom junebelt om cookie i goras.
              L??mid p??rende bebel l??ligt kan.
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
        </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
        <header>
        <section className="header flex-1 md:flex py-4 px-4 md:py-8 justify-around m-8">
          <div className="text basis-1/2 md:basis-1/2 items-center justify-center sm:text-center md:text-left  ">
            <h2 className="font-bold text-violet-700 ">Articles Page </h2>
            <p>
              L??rem ipsum heterov lynat paramun. G??lig poprens etira p?? anas:
              mingen. Bek kokrosamma infrar. Ynt ??ktigt isk. Lad monodat
              wikil??cka. Spedigisk vetretest i raren f??n och nysogisk. Or
              hyposamma spest. Byfaktigt oliga bebagt vektigt. Pyr teskap att
              t??de denas. Bioligt bende eftersom junebelt om cookie i goras.
              L??mid p??rende bebel l??ligt kan.
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
            <img src={article} alt="pic" className="w-full"></img>
          </div>
        </section>
      </header>

      </Animator>
        </ScrollPage>


        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
      <section className="header flex-1 md:flex py-8 px-4 md:py-8 justify-around m-8">
      <div className="basis-1/4 md:basis-1/3 md:w-1/4  md:basis-1/2 bg-image m-8 ">
            <img src={shoe} alt="pic" className="w-full"></img>
          </div>
          
          <div className="text basis-1/2 md:basis-1/2 items-center justify-center sm:text-center md:text-left  ">
            <h2 className="font-bold text-violet-700">E-commerce App</h2>
            <p>
              L??rem ipsum heterov lynat paramun. G??lig poprens etira p?? anas:
              mingen. Bek kokrosamma infrar. Ynt ??ktigt isk. Lad monodat
              wikil??cka. Spedigisk vetretest i raren f??n och nysogisk. Or
              hyposamma spest. Byfaktigt oliga bebagt vektigt. Pyr teskap att
              t??de denas. Bioligt bende eftersom junebelt om cookie i goras.
              L??mid p??rende bebel l??ligt kan.
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
        </Animator>
        </ScrollPage>


      <header>
      <section className="git mx-8">
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
        

        </ScrollContainer>
        <Footer/>
        
    </div>
  );
}
