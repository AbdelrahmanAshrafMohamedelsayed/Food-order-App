import styled from "styled-components";
export const MMContainer = styled.div`
  /* animation: bump 300ms ease-out;
  -webkit-animation: bump 300ms ease-out; */
  display: flex;
  padding: 1rem 2.5rem;
  justify-content: space-between;
  background-color: rgb(77 22 1 / 50%);
  border-radius: 30px;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background-color: #2c0d00;
  }
  span.icon {
    margin-right: 0.5rem;
  }
  span.number {
    font-size: 1rem;
    display: inline-block;

    border-radius: 30px;
    background-color: rgb(185, 69, 23);
    margin-left: 0.5rem;
    padding: 0.25rem 1rem;
  }
  p {
    font-size: 1rem;
  }
  @media (max-width: 510px) {
    font-size: 1rem;
  }
  &.bump {
    animation: bump 300ms ease-out;
    -webkit-animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
      -webkit-transform: scale(0.9);
      -moz-transform: scale(0.9);
      -ms-transform: scale(0.9);
      -o-transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
