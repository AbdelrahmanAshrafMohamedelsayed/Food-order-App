import styled from "styled-components";
export const MMContainer = styled.div`
  /* padding: 10px; */
  border-bottom: 1px solid #e5e5e5;
  .inv {
    color: #8a2b06;
    text-align: center;
  }
`;
export const Meala = styled.div`
  display: flex;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem auto;
  .info {
    font-size: 1.5rem;
    font-weight: bold;
    color: rgb(51, 51, 51);
    /* flex-basis: 20%; */
  }
  .name {
    /* margin-bottom: 0.5rem; */
  }
  .disc {
    font-size: 1rem;
    color: #333;
    /* margin-bottom: 0.5rem; */
    font-style: italic;
    font-weight: 600;
  }

  .price {
    font-size: 1rem;
    color: #8a2b06;
    flex: 1;
  }

  .in {
    margin-bottom: 0.5rem;
  }
  label {
    font-size: 1rem;
    font-weight: bold;
    color: rgb(51, 51, 51);
  }
  input {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    padding-right: 0px;
    border-radius: 5px;
    border: 1px solid rgb(221, 221, 221);
    width: 3rem;
    margin-left: 0.5rem;
  }
  button {
    background-color: rgb(138, 43, 6);
    border: 1px solid rgb(138, 43, 6);
    color: #fff;
    border-radius: 10px;
    /* margin-left: 0.5rem; */
    cursor: pointer;
    transition: all 0.3s ease 0s;
    padding: 0.25rem 1rem;
    font-size: 1.25rem;
    font-weight: bold;
  }
  .btns {
    text-align: right;
  }
  button:hover {
    background-color: #641e03;
    color: #fff;
  }
  button.inc {
  }
  button.dec {
  }
  @media (max-width: 610px) {
    .name {
      font-size: 1rem;
    }
  }
`;
