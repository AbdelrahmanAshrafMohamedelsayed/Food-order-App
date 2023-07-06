import styled from "styled-components";
export const ModalSelf = styled.div`
  background-color: #fff;
  color: #333;
  width: 50rem;
  max-width: 90%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 20vh;
  z-index: 2;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  animation: slide-down 300ms ease-out forwards;
  @keyframes slide-down {
    0% {
      transform: translateX(-50%) translateY(-100%);
    }
    100% {
      transform: translateX(-50%) translateY(0);
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalFooter = styled.div`
  div.h {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    color: rgb(51, 51, 51);
  }
  /* p.txt{

}
p.price{

} */
  div.btns {
    text-align: right;
    margin-top: 1rem;
  }
  button {
    outline: none;
    margin-left: 0.5rem;
  }
  button.close {
    background-color: #fff;
    border: 1px solid #8a2b06;
    color: #8a2b06;
    padding: 0.5rem 1rem;
    border-radius: 40px;

    cursor: pointer;
    transition: 0.3s;
    padding: 0.75rem 2rem;
  }
  button.close:hover {
    background-color: #4d1601;
    color: #fff;
  }
  button.Order {
    background-color: rgb(138, 43, 6);
    color: rgb(255, 255, 255);
    padding: 0.5rem 1rem;
    border-radius: 40px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    padding: 0.75rem 2rem;
    border: none;
  }
  button.Order:hover {
    background-color: #4d1601;
    color: #fff;
  }
`;
