import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Product } from "./Product";

function Products() {
  return (
    <Container>
      <Row>
        <Col sm>
          <Product />
        </Col>
        <Col sm>
          <Product />
        </Col>
        <Col sm>
          <Product />
        </Col>
        <Col sm>
          <Product />
        </Col>
      </Row>
    </Container>
  );
}

export { Products };
