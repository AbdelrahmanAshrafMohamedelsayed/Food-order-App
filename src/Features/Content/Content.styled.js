import styled from "styled-components";
export const Container = styled.div`
  .image {
    width: 100%;
    height: 25rem;
    z-index: -1;
    overflow: hidden;
  }
  img {
    width: 110%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  }
  .txt {
    padding: 1rem;
    text-align: center;
    background-color: #383838;
    color: #fff;
    border-radius: 14px;
    box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
    width: 45rem;
    margin: 0 auto;
    max-width: 90%;
    position: relative;
    margin-top: -10rem;
    z-index: 1;
  }
  .txt h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .txt p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;
