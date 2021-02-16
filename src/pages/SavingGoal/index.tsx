import * as React from 'react';

import house from '../../icons/house.svg';

import Header from '../../components/Header';
import MainCard from '../../components/MainCard';
import GoalHeader from '../../components/GoalHeader';

const SavingGoal: React.FunctionComponent = () => {
  const logo = <img src={house} />;

  return (
    <>
      <Header />
      <MainCard>
        <GoalHeader title="Buy a house" logo={logo} />
      </MainCard>
    </>
  );
};

export default SavingGoal;
