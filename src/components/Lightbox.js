import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import SmallKleistImg from './pictures/smallKleist.JPG';
import KleistImg from './pictures/kleist.jpg';
import SportImg from './pictures/sportpalastrede.jpg';
//import SmallSportImg from './pictures/smallSportpalast.JPG';
import WirKinderImg from './pictures/wirkinder.jpg';
import PalasseumImg from './pictures/palasseum.jpg';


//let slideIndex = 1;

class Lightbox extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            show: false
          };
        };
    
    handleShow = () => {
        this.setState({
            show: true
        })
    }  

    handleClose = (e) => {
        this.setState({
            show: false
        });
        //this.props.history.push('/');
        }
    // Open the Modal
    /*openModal() {
        this.setState({display: "block"})
        //document.getElementById("myModal").style.display = "block";
    }*/
  
    /*// Close the Modal
    closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

    //this.showSlides(slideIndex);

    // Next/previous controls
    plusSlides(n) {
        this.showSlides(slideIndex += n);
    }*/
  
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
  
    /*, this.currentSlide(1)*/

    render() {

        return (
            <Container fluid className="container2">
                
                {/*<!-- Images used to open the lightbox -->*/}
                <Row className="galery">
                    <Col>
                        <img src={KleistImg} alt="Kleist" onclick={this.handleShow()} />
                    </Col>
                    {/*<Col>
                        <img src={SportImg} onclick="openModal();currentSlide(2)" className="hover-shadow" />
                    </Col>
                    <Col>
                        <img src={WirKinderImg} onclick="openModal();currentSlide(3)" className="hover-shadow" />
                    </Col>
                    <Col>
                        <img src={PalasseumImg} onclick="openModal();currentSlide(4)" className="hover-shadow" />
                    </Col>*/}
                </Row>

                <Modal show={this.state.show} onHide={(e) => this.handleClose(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Success!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your e-mail, phone number and address have been successfully added to our database. You will start getting our alerts soon.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={(e) => this.handleClose(e)}>
                            Close
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

