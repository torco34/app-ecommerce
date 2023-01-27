import Carousel from "react-bootstrap/Carousel";
import nike from "../assets/img/pija.jpeg";
import nike2 from "../assets/img/mug.jpeg";
import logo from "../assets/img/pc.jpeg";
import { ContainerHome } from "../assets/styled/HomePages";
function HomePages() {
  return (
    <div className="container ">
      <ContainerHome>
        <Carousel>
          <Carousel.Item>
            <img className="d-block 50-w" src={logo} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block " src={nike2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block " src={nike} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </ContainerHome>
    </div>
  );
}

export { HomePages };
