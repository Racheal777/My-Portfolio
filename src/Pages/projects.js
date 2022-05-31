import React from 'react'
import {  Row, Col, Container } from "react-bootstrap";

export default function Projects() {
  return (
    <div className='projects'>
        <Container fluid>

            <Row className='projects-section'>
                <h2>Projects</h2>
                <Col xs={12} md={4}>
                <div className='project-1'>
                    <button>View Project</button>
                </div>
                
                </Col>

                <Col xs={12} md={4}>
                <div className='project-1'>
                    <button>View Project</button>
                </div>
                
                </Col>

                <Col xs={12} md={4}>
                <div className='project-1'>
                    <button>View Project</button>
                </div>
                
                </Col>

          
            </Row>
            <button>View more</button>
        </Container>
    </div>
  )
}
