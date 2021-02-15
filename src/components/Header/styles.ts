import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding-left: 16px;
  background-color: #ffffff;
  img {
    height: 26px;
  }

  @media only screen and (min-width: 768px) {
    height: 79px;
    padding-left: 37px;
    img {
      height: 38px;
    }
  }
`;
