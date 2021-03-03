import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import KleistImg from './pictures/kleist.jpg';
import SportImg from './pictures/sportpalastrede.jpg';
import WirKinderImg from './pictures/wirkinder.jpg';
import PalasseumImg from './pictures/palasseum.jpg';
import Bowie1Img from './pictures/bowie1.jpg';
import GoebbelsImg from './pictures/goebbels.jpg';
import HoffmannImg from './pictures/hoffmann.jpg';
import PoeImg from './pictures/poe.jpg';
import Bowie2Img from './pictures/bowie2.jpg';


//let slideIndex = 1;

class Lightbox extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            show: false,
            slide: ""
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
        console.log(this.state.slide)
    };

    // Next/previous controls
    //plusSlides(n) {

        //this.showSlides(slideIndex += n);
    //}
  
  // Thumbnail image controls
    /*currentSlide(n) {
        this.showSlides(slideIndex = n);
    }*/
  
    /*showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        //slides[slideIndex-1].style.display = "block";
        //dots[slideIndex-1].className += " active";
        //captionText.innerHTML = dots[slideIndex-1].alt;
    }*/

    render() {

        return (
            <Container fluid className="container2">
                
                {/*<!-- Images used to open the lightbox -->*/}
                <Container fluid className="gallery">
                    <Row className="gallery">
                        <Col>
                            <img src={KleistImg} alt="Kleist" onClick={(e) => this.setSlide("KleistImg")} className="hover-shadow" />
                            Heinrich von Kleist
                        </Col>
                        <Col>
                            <img src={SportImg} alt="Sportpalastrede" onClick={(e) => this.setSlide("SportImg")} className="hover-shadow" />
                            Sportpalast speech
                        </Col>
                        <Col>
                            <img src={WirKinderImg} alt="WirKinder" onClick={(e) => this.setSlide("WirKinderImg")} className="hover-shadow" />
                            Christiane F. movie still
                        </Col>
                    </Row>
                    <Row>
                        <Col><img src={PalasseumImg} alt="Palasseum" onClick={(e) => this.setSlide("PalasseumImg")} className="hover-shadow" />Palasseum</Col>
                        <Col><img src={Bowie1Img} alt="Bowie1" onClick={(e) => this.setSlide("Bowie1Img")} className="hover-shadow" />David Bowie, 70s</Col>
                        <Col><img src={HoffmannImg} alt="A drawing by ETA Hoffmann" onClick={(e) => this.setSlide("HoffmannImg")} className="hover-shadow" />Drawing, ETA Hoffmanm</Col>
                    </Row>
                    <Row>
                        <Col><img src={GoebbelsImg} alt="Goebbels" />Goebbels</Col>
                        <Col><img src={PoeImg} alt="Poe" />Drawing from Edgar Allen Poe book</Col>
                        <Col><img src={Bowie2Img} alt="Bowie2" />David Bowie visiting Berlin</Col>
                    </Row>
                </Container>

                <Modal show={this.state.show} onHide={(e) => this.handleClose(e)}>
                    <Modal.Body><img src={this.state.slide} /></Modal.Body> 
                    <Modal.Footer>
                            <Button variant="primary" onClick={(e) => this.handleClose(e)}>
                                &times;
                            </Button>
                    </Modal.Footer>
                </Modal>

                {/*<!-- The Modal/Lightbox -->
                <Modal id="myModal" className="modal">
                    <span className="close cursor" onclick="closeModal()">&times;</span>
                    <div className="modal-content">

                        <div className="mySlides">
                            <div className="numbertext">1 / 4</div>
                            <img src="img1_wide.jpg" />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">2 / 4</div>
                            <img src="img2_wide.jpg" />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">3 / 4</div>
                            <img src="img3_wide.jpg" />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">4 / 4</div>
                            <img src="img4_wide.jpg" />
                        </div>

                        <!-- Next/previous controls -->
                        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a class="next" onclick="plusSlides(1)">&#10095;</a>

                        <!-- Caption text -->
                            <div class="caption-container">
                            <p id="caption"></p>
                        </div>

                        <!-- Thumbnail image controls -->
                        <Col>
                            <img class="demo" src="img1.jpg" onclick="currentSlide(1)" alt="Nature" />
                        </Col>

                        <Col>
                            <img class="demo" src="img2.jpg" onclick="currentSlide(2)" alt="Snow" />
                        </Col>

                        <Col>
                            <img class="demo" src="img3.jpg" onclick="currentSlide(3)" alt="Mountains" />
                        </Col>

                        <Col>
                            <img class="demo" src="img4.jpg" onclick="currentSlide(4)" alt="Lights" />
                        </Col>
                    </div>
                </Modal>*/}
            </Container>
        );
    }
}

export default Lightbox;

