import { useContext } from "react";
import { MMContainer, Meala } from "./Meal.styled";
import AuthContext from "../../Store/Auth-context";
import { useState } from "react";

const Meal = ({ inf }) => {
  let [Amount, setAmount] = useState(1);
  let [invalid, setinvalid] = useState(false);

  console.log(Amount);
  const AmountHandler = (e) => {
    setAmount(e.target.value);
  };
  const AddMealHandler = (e) => {
    e.preventDefault();
    console.log("AddMealHandler " + inf.name + Amount);
    Amount = +Amount;
    if (Amount < 1 || Amount > 5) {
      setinvalid(true);
      return;
    }
    ctxAmount.increment(inf.name, Amount);
    setinvalid(false);
    setAmount(1);
  };
  const ctxAmount = useContext(AuthContext);
  return (
    <MMContainer>
      <Meala>
        <div className="info">
          <div className="name">{inf.name}</div>
          <div className="disc">{inf.description}</div>
          <div className="price">${inf.price}</div>
        </div>
        <div className="act">
          <form onSubmit={AddMealHandler}>
            <div className="in">
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                type="number"
                value={Amount}
                onChange={AmountHandler}
                step="1"
                // defaultValue="1"
              />
            </div>
            <div className="btns">
              {" "}
              <button type="submit">+ Add</button>
            </div>
          </form>
        </div>
      </Meala>
      {invalid && <p className="inv">Please enter a valid amount (1-5).</p>}
    </MMContainer>
  );
};

export default Meal;
