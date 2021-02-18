import * as React from 'react';
import { useState } from 'react';

import house from '../../icons/house.svg';

import Header from '../../components/Header';
import MainCard from '../../components/MainCard';
import GoalHeader from '../../components/GoalHeader';
import TotalAmount from '../../components/TotalAmount';
import ReachByDate from '../../components/ReachByDate';

import {
  InputContainer,
  ResultsCard,
  MonthyDeposit,
  Summary,
  SubmitButton
} from './styles';

const SavingGoal: React.FunctionComponent = () => {
  const currentMonth = new Date().getMonth();
  const currentFullYear = new Date().getFullYear();

  const [totalAmount, setTotalAmount] = useState(0);
  const [month, setMonth] = useState(currentMonth);
  const [monthName, setMonthName] = useState('');
  const [year, setYear] = useState(currentFullYear);
  const [monthsToGoal, setMonthsToGoal] = useState(currentFullYear);
  const logo = <img src={house} />;

  const monthlyPayment = (totalAmount / monthsToGoal).toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });

  const formatedTotalAmount = totalAmount.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });

  return (
    <>
      <Header />
      <MainCard>
        <GoalHeader title="Buy a house" logo={logo} />
        <InputContainer>
          <TotalAmount setTotalAmount={setTotalAmount} />
          <ReachByDate
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            currentMonth={currentMonth}
            monthName={monthName}
            setMonthName={setMonthName}
            currentFullYear={currentFullYear}
            setMonthsToGoal={setMonthsToGoal}
          />
        </InputContainer>
        <ResultsCard>
          <MonthyDeposit>
            <div>
              <span>Monthly</span>
              <span> amount</span>
            </div>
            <h2>${monthlyPayment}</h2>
          </MonthyDeposit>
          <Summary>
            <span>
              You’re planning <strong>{monthsToGoal} monthly deposits </strong>
              to reach your <strong>${formatedTotalAmount} </strong>
              goal by <strong>{`${monthName} ${year}`}</strong>.
            </span>
          </Summary>
        </ResultsCard>
        <SubmitButton>Confirm</SubmitButton>
      </MainCard>
    </>
  );
};

export default SavingGoal;
