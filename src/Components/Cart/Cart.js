import { useState } from "react";
import { MMContainer } from "./Cart.styled";
import { BsFillCartFill } from "react-icons/bs";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import AuthContext from "../../Store/Auth-context";
import { useEffect } from "react";
const Cart = () => {
  const ctxAmount = useContext(AuthContext);
  const totalAmount =
    +ctxAmount.Sushi.currentAmount +
    +ctxAmount.Schnitzel.currentAmount +
    +ctxAmount.Barbecue.currentAmount +
    +ctxAmount.Green.currentAmount;
  const onClickModal = () => {
    setModalShow((prev) => !prev);
  };
  const [ModalShow, setModalShow] = useState(false);
  const [AmountChange, setAmountChange] = useState(false);
  useEffect(() => {
    setAmountChange(true);
    const timer = setTimeout(() => {
      setAmountChange(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [totalAmount]);
  return (
    <>
      {ModalShow && <Modal onClickModal={onClickModal} />}
      <MMContainer
        onClick={() => {
          setModalShow((prev) => !prev);
        }}
        className={AmountChange ? "bump" : ""}
      >
        <span className="icon">
          <BsFillCartFill />
        </span>
        <p>Your Cart</p>
        <span className="number">{totalAmount}</span>
      </MMContainer>
    </>
  );
};

export default Cart;
