import React from 'react'
import {  Row, Col, Container } from "react-bootstrap";

export default function About() {
  return (
    <div>
        <Container fluid>
        <Row className='about'>
            {/* <Col> */}

            <Col sm ={6} md = {5}>
                <div className='bg-image'>

                </div>
            </Col>
            
            <Col sm ={6} md = {6}>
            <div className='about-text'>
                <h2>About</h2>
                <p>
                Lörem ipsum heterov lynat paramun. Gälig poprens etira på anas: mingen.
                 Bek kokrosamma infrar. Ynt äktigt isk. Pon favis panektig. Soliga astroling att mikrosk i influerare. 
            
            Lad monodat wikiläcka. Spedigisk vetretest i raren fön och nysogisk. Or hyposamma 
            spest. Byfaktigt oliga bebagt vektigt.
                
                
                Kagon beck koscheria kans för kropp. Stenons nyfägen bekagon semick. Benerar 
                sobarade de nyv laras sarade. 

                </p>
                <button>Read more</button>
            </div>
            {/* </Col> */}
            </Col>
        </Row>
        </Container>
    </div>
  )
}
