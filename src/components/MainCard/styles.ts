import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  align-items: center;
  width: 100%;
  max-width: 560px;
  padding-top: 23px;

  @media only screen and (min-width: 768px) {
    padding-top: 54px;
  }
`;

export const CardTitle = styled.div`
  text-align: center;
  line-height: 26px;
  font-size: 18px;
  letter-spacing: -0.2px;
  color: #1b31a8;
  strong {
    font-weight: 600;
  }

  @media only screen and (min-width: 768px) {
    line-height: 32px;
    font-size: 24px;
  }
`;

export const CardBody = styled.div`
  margin-top: 24px;
  width: 100%;
  max-width: 560px;
  height: 690px;
  border-radius: 14px;
  box-shadow: 0px 2px 16px rgba(225, 232, 237, 0.8);
  background-color: #fff;
  padding: 28px 24px 0;

  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    height: 600px;
    border: 1px solid #e1e8ed;
    border-radius: 8px;
    box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
    padding: 39px 40px 0 39px;
  }
`;
