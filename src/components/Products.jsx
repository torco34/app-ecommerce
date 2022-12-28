import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Product } from "./Product";

import productsData from "../data";

function Products() {
  return (
    <div className="container">
      <Container>
        <Row>
          {productsData.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export { Products };
