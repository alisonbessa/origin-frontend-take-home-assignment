import * as React from 'react';
import { useState } from 'react';

import house from '../../icons/house.svg';

import Header from '../../components/Header';
import MainCard from '../../components/MainCard';
import GoalHeader from '../../components/GoalHeader';
import TotalAmount from '../../components/TotalAmount';

import { InputContainer } from './styles';

const SavingGoal: React.FunctionComponent = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const logo = <img src={house} />;

  return (
    <>
      <Header />
      <MainCard>
        <GoalHeader title="Buy a house" logo={logo} />
        <InputContainer>
          <TotalAmount
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
          />
        </InputContainer>
      </MainCard>
    </>
  );
};

export default SavingGoal;
