import * as React from 'react';
import { useState } from 'react';

import CurrencyInput from 'react-currency-input';

import { Container, InputContainer } from './styles';

type Props = {
  setTotalAmount: (value: number) => void;
};

const TotalAmount: React.FunctionComponent<Props> = ({ setTotalAmount }) => {
  const [formatedValue, setFormatedValue] = useState('');

  const handleChange = (
    event: never,
    maskedvalue: React.SetStateAction<string>,
    floatvalue: number
  ) => {
    setFormatedValue(maskedvalue);
    setTotalAmount(floatvalue);
  };

  return (
    <>
      <Container>
        <label>Total amount</label>
        <InputContainer>
          <div>$</div>
          <CurrencyInput
            value={formatedValue}
            onChangeEvent={handleChange}
            decimalSeparator="."
            thousandSeparator=","
          />
        </InputContainer>
      </Container>
    </>
  );
};

export default TotalAmount;
