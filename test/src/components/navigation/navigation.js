import React from "react";
import {NavLink} from 'react-router-dom';
import {Nav, Navbar} from "react-bootstrap";

const navigation = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">ReactApp</Navbar.Brand>
                <Nav className="mr-auto">

                    <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/fragen">Fragen</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/frageExample">FragenExample</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/fragentest">FragenTest</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/fragenmytest">FragenMyTest</NavLink></Nav.Link>


                    <Nav.Link><NavLink to="/contact">Contact</NavLink></Nav.Link>
                </Nav>
            </Navbar>

        </div>
    )
};

export default navigation;
