import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 38px;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-top: 42px;
  }
`;

export const ResultsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 135px;
  margin-top: 30px;
  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 4px;

  @media only screen and (min-width: 600px) {
    height: 168px;
  }
`;

export const MonthyDeposit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 23px;
  height: 63px;
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #1c1e1f;
    :nth-child(2) {
      display: none;
    }
  }
  h2 {
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    text-align: right;
    letter-spacing: -0.216667px;
    color: #0079ff;
  }

  @media only screen and (min-width: 600px) {
    height: 102px;
    padding: 6px 32px 0;
    span {
      font-size: 18px;
      line-height: 24px;
      :nth-child(2) {
        display: inline;
      }
    }
    h2 {
      font-size: 40px;
      line-height: 32px;
    }
  }
`;

export const Summary = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px 4px;
  height: 70px;
  background: #f4f8fa;
  font-size: 12px;
  line-height: 16px;
  color: #1c1e1f;
  border-radius: 0 0 3px 3px;

  @media only screen and (min-width: 600px) {
    padding: 4px 32px 0;
  }
`;

export const SubmitButton = styled.button`
  width: 328px;
  height: 56px;
  position: absolute;
  margin-top: 34px;
  margin-right: -50%;
  left: 50%;
  transform: translate(-50%);
  background: #1b31a8;
  border: none;
  border-radius: 32px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;

  :hover {
    background: #0b2188;
  }

  :active {
    background: #2b51b8;
  }

  @media only screen and (min-width: 600px) {
    width: 400px;
  }
`;
