import React from 'react'
import image2 from "../images/pic2.png";
import { Animator, ScrollContainer, ScrollPage, batch, Fade,FadeUp, FadeIn,
    FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut,
     Zoom, ZoomIn, ZoomOut, ZoomInScrollOut } from "react-scroll-motion";

export default function Header() {
    const ZoomInScrollOut = batch( Move(), MoveIn(1000, 0),  MoveOut(0, -200)   );
  const FadeUp = batch( Move(),);
  return (
    <ScrollContainer>
        {/* <ScrollPage>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}>Hello 👋🏻</Animator>
        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
        - Im Racheal -
        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
      </span>
    </div>
        </ScrollPage> */}

        

       

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
            <p>I build cool stuff and bring your ideas to life</p>

            <div>
              <a
                href="https://www.linkedin.com/in/racheal-kuranchie"
                target="_blank"
                className="icon p-3"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/RachealKuranch2"
                target="_blank"
                className="icon p-3"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://github.com/Racheal777"
                target="_blank"
                className="icon p-3"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://medium.com/@rachealkuranchie"
                target="_blank"
                className="icon p-3"
              >
                <i className="fa-brands fa-medium"></i>
              </a>
            </div>
            <button className ="animate-bounce bg-gradient-to-r hover:from-cyan-500 hover:to-bg-fuchsia-700" > <a href="/" >Hire me</a></button>
          </div>

          <div className="img  basis-1/4 md:basis-1/3 items-center justify-center   p-0 md:w-full  ">
            <img
              src={image2}
              alt="picture"
              className="h-96 w-full md:w-full  justify-center"
            ></img>
          </div>
        </div>
       
        </ScrollContainer>
  )
}
