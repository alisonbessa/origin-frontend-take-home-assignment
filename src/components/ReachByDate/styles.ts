import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 17px;
  align-items: center;
  width: 100%;

  label {
    font-weight: 500;
  }

  @media only screen and (min-width: 600px) {
    margin-top: 0;
    width: 232px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 5px;
  height: 56px;
  border: 1px solid #e1e8ed;
  border-radius: 4px;

  div {
    padding-right: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: #1c1e1f;

    span:first-child {
      font-weight: 600;
      font-size: 20px;
      line-height: 22px;
      letter-spacing: -0.166667px;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 236px;
    div {
      font-size: 16px;
      span:first-child {
        line-height: 24px;
      }
    }
  }
`;

export const Button = css`
  height: 54px;
  width: 48px;
  background-color: #e1e8ed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: #657786;
  border: none;
  border-right: 1px solid #e1e8ed;
  border-radius: 3px 0 0 3px;
  :hover {
    background-color: #d1d8dd;
  }
  :disabled {
    background-color: #f4f8fa;
  }
  :active {
    background-color: #e1e8ed;
  }
`;

export const LeftButton = styled.button`
  ${Button};
`;

export const RightButton = styled.button`
  ${Button};
  transform: rotate(180deg);
`;
