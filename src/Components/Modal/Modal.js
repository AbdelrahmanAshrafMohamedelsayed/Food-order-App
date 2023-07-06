import { useContext } from "react";
import AuthContext from "../../Store/Auth-context";
import { ModalFooter, ModalSelf, Overlay } from "./Modal.styled";
import ModalElement from "../ModalElement/ModalElement";

const Modal = ({ onClickModal }) => {
  const ctxAmount = useContext(AuthContext);
  const totalAmount =
    +ctxAmount.Sushi.currentAmount * +ctxAmount.Sushi.price +
    +ctxAmount.Schnitzel.currentAmount * +ctxAmount.Schnitzel.price +
    +ctxAmount.Barbecue.currentAmount * +ctxAmount.Barbecue.price +
    +ctxAmount.Green.currentAmount * +ctxAmount.Green.price;
  return (
    <>
      <Overlay
        onClick={() => {
          onClickModal();
        }}
      ></Overlay>
      <ModalSelf>
        {!!ctxAmount.Sushi.currentAmount && (
          <ModalElement inf={ctxAmount.Sushi} />
        )}
        {!!ctxAmount.Schnitzel.currentAmount && (
          <ModalElement inf={ctxAmount.Schnitzel} />
        )}
        {!!ctxAmount.Barbecue.currentAmount && (
          <ModalElement inf={ctxAmount.Barbecue} />
        )}
        {!!ctxAmount.Green.currentAmount && (
          <ModalElement inf={ctxAmount.Green} />
        )}
        <ModalFooter>
          <div className="h">
            <p className="txt">Total Amount</p>
            <p className="price">${totalAmount.toFixed(2)}</p>
          </div>
          <div className="btns">
            <button className="close" onClick={() => onClickModal()}>
              Close
            </button>
            <button
              className="Order"
              type="submit"
              onClick={() => {
                console.log("Order");
                console.log("Order");
              }}
            >
              Order
            </button>
          </div>
        </ModalFooter>
      </ModalSelf>
    </>
  );
};

export default Modal;
