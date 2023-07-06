import styled from "styled-components";
export const Container = styled.div`
  margin: 0 auto;
  background-color: #fff;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
  margin: 2.5rem auto;
  width: 60rem;
  max-width: 90%;
  animation: ApperToUp 1s ease forwards; //forwards: stay in the last state of the animation
  @keyframes ApperToUp {
    0% {
      opacity: 0;
      transform: translateY(3rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
