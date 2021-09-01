import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'

import "../css/Header.css"

const HeaderPage = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#">
                    <img src="logo.png" alt="logo" className="header-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">MAN</Nav.Link>
                        <Nav.Link href="#pricing">WOMAN</Nav.Link>
                        <NavDropdown title="SHOP" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="nav-right">
                        <Nav.Link href="#deets">
                            <AiOutlineSearch />
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <AiOutlineUser />
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="#" className="nav-search">
                            <AiOutlineShoppingCart />
                            <span className="cart-count">0</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderPage
