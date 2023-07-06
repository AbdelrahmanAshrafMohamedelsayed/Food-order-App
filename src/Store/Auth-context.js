import React from "react";
import { useState, useEffect } from "react";
const AuthContext = React.createContext({
  Sushi: {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    currentAmount: 0,
  },
  Schnitzel: {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    currentAmount: 0,
  },
  Barbecue: {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    currentAmount: 0,
  },
  Green: {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    currentAmount: 0,
  },
  increment: (Meal) => {},
  decrement: (Meal) => {},
});
// import React from 'react'

export function AuthContextProvider(props) {
  const [Sushi, setSushi] = useState({
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    currentAmount: 0,
  });
  const [Schnitzel, setSchnitzel] = useState({
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    currentAmount: 0,
  });
  const [Barbecue, setBarbecue] = useState({
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    currentAmount: 0,
  });
  const [Green, setGreen] = useState({
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    currentAmount: 0,
  });

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const increment = (Meal, amount = 1) => {
    amount = +amount;
    amount = amount > 0 ? amount : 1;
    if (Meal === "Sushi")
      setSushi({ ...Sushi, currentAmount: Sushi.currentAmount + amount });
    if (Meal === "Schnitzel")
      setSchnitzel({
        ...Schnitzel,
        currentAmount: Schnitzel.currentAmount + amount,
      });
    if (Meal === "Barbecue Burger")
      setBarbecue({
        ...Barbecue,
        currentAmount: Barbecue.currentAmount + amount,
      });
    if (Meal === "Green Bowl")
      setGreen({ ...Green, currentAmount: Green.currentAmount + amount });
  };

  const decrement = (Meal) => {
    if (Meal === "Sushi" && Sushi.currentAmount > 0)
      setSushi({ ...Sushi, currentAmount: Sushi.currentAmount - 1 });
    if (Meal === "Schnitzel" && Schnitzel.currentAmount > 0)
      setSchnitzel({
        ...Schnitzel,
        currentAmount: Schnitzel.currentAmount - 1,
      });
    if (Meal === "Barbecue Burger" && Barbecue.currentAmount > 0)
      setBarbecue({
        ...Barbecue,
        currentAmount: Barbecue.currentAmount - 1,
      });
    if (Meal === "Green Bowl" && Green.currentAmount > 0)
      setGreen({ ...Green, currentAmount: Green.currentAmount - 1 });
  };

  return (
    <AuthContext.Provider
      value={{
        Sushi: Sushi,
        Schnitzel: Schnitzel,
        Barbecue: Barbecue,
        Green: Green,
        increment: increment,
        decrement: decrement,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// export default Auth-context
export default AuthContext;
