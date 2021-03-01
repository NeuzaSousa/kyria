import React from 'react';
import Container from 'react-bootstrap/Container';
import HomeImg from './pictures/home.png';
import InstaImg from './pictures/insta.png';
import { Link } from "react-router-dom";

class Contact extends React.Component {
    render() {
        return (
            <Container fluid>
                <h1 className="title">Contact</h1>
                <p className="insta"><img src={InstaImg} alt="Instagram" />&#32;@operation_walkyria</p>
                <p><span className="email">&#x1f4e7;</span>&#32; mariafrancisca@gmail.com</p>
                <p><span className="phone">&#9742;</span>&#32; +49(0)1520 123456</p>

                <Link to="/english"><img src={HomeImg} alt="Home" id="home" /></Link>
                <p>Home</p>
            </Container>
        )
    }
}

export default Contact;