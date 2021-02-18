import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  width: 100%;
  max-width: 560px;
  img {
    width: 30px;
    margin-bottom: 4px;
  }

  @media only screen and (min-width: 600px) {
    img {
      width: 36px;
    }
  }
`;

export const Title = styled.span`
  display: block;
  color: #1c1e1f;
  letter-spacing: -0.2px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  @media only screen and (min-width: 600px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.266667px;
  }
`;

export const SubTitle = styled.span`
  display: block;
  color: #657786;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  /* letter-spacing: -0.2px; */

  @media only screen and (min-width: 600px) {
    font-size: 16px;
    margin-top: 4px;
  }
`;
