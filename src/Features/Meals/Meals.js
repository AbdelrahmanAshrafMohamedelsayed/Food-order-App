import { useContext } from "react";
import AuthContext from "../../Store/Auth-context";
import { Container } from "./Meals.styled";
import Meal from "../../Components/Meal/Meal";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const Meals = () => {
  // const ctxAmount = useContext(AuthContext);
  return (
    <Container>
      {DUMMY_MEALS.map((el, index) => {
        return <Meal inf={el} key={el.id} />;
      })}
      {/* {<Meal inf={ctxAmount.Sushi} />}
      {<Meal inf={ctxAmount.Schnitzel} />}
      {<Meal inf={ctxAmount.Barbecue} />}
      {<Meal inf={ctxAmount.Green} />} */}
    </Container>
  );
};

export default Meals;
