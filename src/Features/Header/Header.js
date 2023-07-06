import Cart from "../../Components/Cart/Cart";
import { Container, MMContainer } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <MMContainer>
        <h1>ReactMeals</h1>
        <Cart />
      </MMContainer>
    </Container>
  );
};

export default Header;
