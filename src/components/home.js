import React, { Component } from "react";
import { Navbar,Nav } from 'react-bootstrap';
import icon from '../image/hackernewicon.gif'


class Home extends Component{
    render(){
        return(
            <div>
                 <Navbar className="navbar-color" expand="lg">
                <Navbar.Brand href="/">
                    <img src={icon} className="logoimg" alt="Logoimg"/>
                    Hacker News
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navbar-menu navbar-menu-color">
                    <Nav.Link href="new">New</Nav.Link>
                    <Nav.Link href="past">Past</Nav.Link>
                    <Nav.Link href="#ourpartners">Comment</Nav.Link>
                    <Nav.Link href="#contactus">Ask</Nav.Link>
                    <Nav.Link href="#footer">Show</Nav.Link>
                    <Nav.Link href="#footer">Jobs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}




export default Home;
