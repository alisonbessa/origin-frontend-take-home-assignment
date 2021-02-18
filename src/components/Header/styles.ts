import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding-left: 16px;
  background-color: #ffffff;
  img {
    width: 65px;
    margin-top: 8px;
  }

  @media only screen and (min-width: 600px) {
    height: 79px;
    padding-left: 37px;
    img {
      width: 95px;
    }
  }
`;
