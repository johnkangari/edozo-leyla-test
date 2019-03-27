import React from 'react';
import styles from './module.scss';
import { Container,Row, Col, Nav } from 'react-bootstrap';

const PageSize = () =>{
    return (
        <footer>
          <div className="content">
             <Container>
                <Row>
                    <Col md="4">
                        <h5>Navigate</h5>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Contact us</Nav.Link>
                            <Nav.Link href="link-1">Legal</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md="4" className="social">
                        <h5>Social</h5>
                        <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link href="/home" className="twitter" >twitter</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-1" className="facebook" >facebook</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2" className="linkedin" >linkedin</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2" className="instagram" >instagram</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col md="4">
                        <h5>Contact</h5>
                        <p className="contactEmail">
                            <a href="mailto:sales@edozo.com">sales@edozo.com</a>
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className="copyright">
                <Container>
                    <p><small>© 2018 edozo Limited</small></p> 
                </Container>
            </div>
          </div>  
        </footer>
    )
  }
  
  export default PageSize;