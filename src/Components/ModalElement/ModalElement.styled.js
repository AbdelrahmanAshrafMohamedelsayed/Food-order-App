import styled from "styled-components";
export const MMContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #8a2b06;
`;
export const Modalheader = styled.div``;
export const ModalBody = styled.div`
  display: flex;
  border-bottom: 1px solid #8a2b06;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem auto;
  .info {
    font-size: 1.5rem;
    font-weight: bold;
    color: rgb(51, 51, 51);
    flex-basis: 20%;
  }
  .name {
    margin-bottom: 0.5rem;
  }
  .x {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .price {
    font-size: 1rem;
    color: #8a2b06;
    flex: 1;
  }
  .amount {
    font-size: 1rem;
    padding: 0.25rem 1rem;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  .act {
  }
  button {
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(138, 43, 6);
    color: rgb(138, 43, 6);
    border-radius: 10px;
    margin-left: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    padding: 0.25rem 1rem;
    font-size: 1.25rem;
    font-weight: bold;
  }
  button:hover {
    background-color: #4d1601;
    color: #fff;
  }
  button.inc {
  }
  button.dec {
  }
  @media (max-width: 610px) {
    .price {
    }
    .amount {
      padding: 0.25rem 0.5rem;
    }
  }
`;
