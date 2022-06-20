import React from 'react'
import Navbarr from '../Controllers/Navbar'
import Footer from "../Controllers/Footer";
import image from "../images/pic1.jpg";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn,
  FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut,
   Zoom, ZoomIn, ZoomOut,  } from "react-scroll-motion";

export default function Artcles() {

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div>

<header>
    <Navbarr/>
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
</header>

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



<Footer/>
    </div>
  )
}
