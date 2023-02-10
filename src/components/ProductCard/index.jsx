import Card from "react-bootstrap/Card";
import { BsStar, BsCart } from "react-icons/bs";
import accounting from "accounting";
import { Icons, StartIcons, CardIcons } from "./styles";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../StateProvider/reducer";
function ProductCard({
  todo: { id, name, image, price, rating, description },
}) {
  const [{ basket }, dispatch] = useStateValue();

  const addCard = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: { id, name, image, price, rating, description },
    });
  };
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {name}
          {accounting.formatMoney(price, "€")}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Icons>
          <CardIcons>
            <BsCart size="35px" onClick={addCard} />
          </CardIcons>
          <StartIcons>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <BsStar size="26px" />
              ))}
          </StartIcons>
        </Icons>
      </Card.Body>
    </Card>
  );
}

export { ProductCard };
