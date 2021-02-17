import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 38px;

  @media only screen and (min-width: 560px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
