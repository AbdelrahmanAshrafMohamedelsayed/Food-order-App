import styled from "styled-components";
export const Container = styled.div`
  background-color: #8a2b06;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
`;
export const MMContainer = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  min-height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Small */
  @media (min-width: 768px) {
    width: 750px;
  }
  /* Medium */
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (max-width: 510px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }
  /* Large */
  @media (min-width: 1200px) {
    width: 1170px;
  }
  max-width: 100%;
`;
