import { Container } from "./Content.styled";

const Content = () => {
  return (
    <Container>
      <div className="image">
        <img src={require("./../../Assets/m.jpg")} alt="img" />
      </div>
      <div className="txt">
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
      </div>
    </Container>
  );
};

export default Content;
