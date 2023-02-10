import Carousel from "react-bootstrap/Carousel";
import nike from "../../assets/img/carru.jpg";
import nike2 from "../../assets/img/carru1.jpg";
import logo from "../../assets/img/carru3.jpg";
import { ContainerCarrusel, Img } from "./styles";
function HomeCarrousel() {
  return (
    <ContainerCarrusel>
      <Carousel>
        <Carousel.Item>
          <Img className="d-block " src={logo} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img className="d-block " src={nike2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img className="d-block " src={nike} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </ContainerCarrusel>
  );
}

export { HomeCarrousel };
