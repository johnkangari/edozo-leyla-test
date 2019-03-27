import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styles from './index.module.scss';
import EdozoLogo from '../edozoLogo';

const Header = () =>{
    return (
        <header>
            <Navbar expand="lg" fixed="top" className={styles.headerBg}>
                <Navbar.Brand href="#home">
                    {/* <img
                        src=""
                        width="134"
                        className="d-inline-block align-top"
                        alt="Edozo"
                    /> */}
                    <EdozoLogo/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" className={styles.contentEnd}>
                        <Nav.Link href="#home">
                            Search
                        </Nav.Link>
                        <Nav.Link href="#link">
                            Pipeline
                        </Nav.Link>
                        <NavDropdown title="Maps" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Create a map</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">My Maps</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
  }
  
  export default Header;