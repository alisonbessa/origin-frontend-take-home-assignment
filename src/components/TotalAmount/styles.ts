import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  width: 100%;

  label {
    font-weight: 500;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 4px;
  height: 56px;
  border: 1px solid #e1e8ed;
  border-radius: 4px;

  div {
    height: 54px;
    width: 56px;
    background-color: #f4f8fa;
    border-right: 1px solid #e1e8ed;
    border-radius: 4px 0 0 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: #657786;
  }

  input {
    font-family: 'Work Sans', sans-serif;
    width: calc(100% - 56px);
    border: none;
    padding-left: 15px;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.17px;
  }
`;
