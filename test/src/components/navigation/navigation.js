import React from "react";
import {NavLink} from 'react-router-dom';
import {Nav, Navbar} from "react-bootstrap";

const navigation = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">ReactApp</Navbar.Brand>
                <Nav className="mr-auto">

                    <NavLink to="/"  className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/fragen" className="nav-link">Fragen</NavLink>
                    <NavLink to="/frageExample" className="nav-link">FragenExample</NavLink>
                    <NavLink to="/fragentest" className="nav-link">FragenTest</NavLink>
                    <NavLink to="/fragenmytest" className="nav-link">FragenMyTest</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </Nav>
            </Navbar>

        </div>
    )
};

export default navigation;
