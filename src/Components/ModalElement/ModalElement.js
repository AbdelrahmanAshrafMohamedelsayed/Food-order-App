import { useContext } from "react";
import { ModalBody } from "./ModalElement.styled";
import AuthContext from "../../Store/Auth-context";

const ModalElement = ({ inf }) => {
  const ctxAmount = useContext(AuthContext);
  return (
    <ModalBody>
      <div className="info">
        <div className="name">{inf.name}</div>
        <div className="x">
          <div className="price">${inf.price}</div>
          <div className="amount">x {inf.currentAmount}</div>
        </div>
      </div>
      <div className="act">
        <button
          className="dec"
          onClick={() => {
            ctxAmount.decrement(inf.name);
          }}
        >
          -
        </button>
        <button
          className="inc"
          onClick={() => {
            ctxAmount.increment(inf.name);
          }}
        >
          +
        </button>
      </div>
    </ModalBody>
  );
};

export default ModalElement;
