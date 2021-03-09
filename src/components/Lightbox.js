import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import KleistImg from './pictures/kleist.jpg';
import SportImg from './pictures/sportpalastrede.jpg';
import WirKinderImg from './pictures/wirkinder.jpg';
import PalasseumImg from './pictures/palasseum.jpg';
import Bowie1Img from './pictures/bowie1.jpg';
import GoebbelsImg from './pictures/goebbels.jpg';
import HoffmannImg from './pictures/hoffmann.jpg';
import PoeImg from './pictures/poe.jpg';
import Bowie2Img from './pictures/bowie2.jpg';

class Lightbox extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            show: false,
            slide: {KleistImg}
          };
        };
    
    handleShow = () => {
        this.setState({
            show: true
        })
    }  

    handleClose = (e) => {
        this.setState({
            show: false,
        });

    }

    setSlide(e) {
        this.setState({
            slide: e
        })
        this.handleShow();
    };

    render() {

        return (
            <Container fluid className="container2">
                
                <Container fluid className="gallery">
                    <Row>
                        <Col>
                            <img src={KleistImg} alt="Kleist" onClick={(e) => this.setSlide(KleistImg)} className="hover-shadow" />Heinrich von Kleist
                        </Col>
                        <Col>
                            <img src={Bowie2Img} alt="Bowie2" onClick={(e) => this.setSlide(Bowie2Img)} className="hover-shadow" />David Bowie visiting Berlin
                        </Col>
                        <Col>
                            <img src={WirKinderImg} alt="WirKinder" onClick={(e) => this.setSlide(WirKinderImg)} className="hover-shadow" />
                            Christiane F. movie still
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={PoeImg} alt="Poe" onClick={(e) => this.setSlide(PoeImg)} className="hover-shadow" />Drawing, Edgar A. Poe book
                        </Col>
                        <Col>
                            <img src={Bowie1Img} alt="Bowie1" onClick={(e) => this.setSlide(Bowie1Img)} className="hover-shadow" />David Bowie, 70s
                        </Col>
                        <Col>
                            <img src={HoffmannImg} alt="A drawing by ETA Hoffmann" onClick={(e) => this.setSlide(HoffmannImg)} className="hover-shadow" />Drawing, ETA Hoffmanm
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={GoebbelsImg} alt="Goebbels" onClick={(e) => this.setSlide(GoebbelsImg)} className="hover-shadow" />Goebbels
                        </Col>
                        <Col>
                            <img src={PalasseumImg} alt="Palasseum" onClick={(e) => this.setSlide(PalasseumImg)} className="hover-shadow" />Palasseum
                        </Col>
                        <Col>
                            <img src={SportImg} alt="Sportpalastrede" onClick={(e) => this.setSlide(SportImg)} className="hover-shadow" />
                            Sportpalast speech
                        </Col>
                    </Row>
                </Container>

                <Modal show={this.state.show} onHide={(e) => this.handleClose(e)}>
                    <Modal.Header closeButton />
                    <Modal.Body><img src={this.state.slide} alt='' /></Modal.Body> 

                </Modal>

            </Container>
        );
    }
}

export default Lightbox;

