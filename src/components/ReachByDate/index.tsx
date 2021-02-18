import * as React from 'react';
import { useEffect } from 'react';

import arrow from '../../icons/arrow.svg';

import { Container, InputContainer, LeftButton, RightButton } from './styles';

type Props = {
  year: number;
  month: number;
  monthName: string;
  currentMonth: number;
  currentFullYear: number;
  setMonthsToGoal: (value: number) => void;
  setYear: (value: number) => void;
  setMonth: (value: number) => void;
  setMonthName: (value: string) => void;
};

const ReachByDate: React.FunctionComponent<Props> = ({
  year,
  month,
  monthName,
  currentMonth,
  currentFullYear,
  setYear,
  setMonth,
  setMonthName,
  setMonthsToGoal
}) => {
  const monthsList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const currentMonthName = monthsList[month];
  const arrowImg = <img src={arrow} />;

  useEffect(() => {
    setMonthName(currentMonthName);
  }, [currentMonthName, monthsList, setMonthName]);

  const decreaseButtonEneable =
    month <= currentMonth && year <= currentFullYear ? true : false;

  const decreaseMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const increaseMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const monthsToReachGoal =
    (year - currentFullYear) * 12 + (month - currentMonth) + 1;

  useEffect(() => {
    setMonthsToGoal(monthsToReachGoal);
  }, [monthsToReachGoal, setMonthsToGoal]);

  document.onkeydown = function() {
    switch (window.event.keyCode) {
      case 37:
        !decreaseButtonEneable && decreaseMonth();
        break;
      case 39:
        increaseMonth();
        break;
    }
  };

  return (
    <>
      <Container>
        <label>Reach goal by</label>
        <InputContainer>
          <LeftButton disabled={decreaseButtonEneable} onClick={decreaseMonth}>
            {arrowImg}
          </LeftButton>
          <div>
            <span>{monthName}</span>
            <span>{year}</span>
          </div>
          <RightButton onClick={increaseMonth}>{arrowImg}</RightButton>
        </InputContainer>
      </Container>
    </>
  );
};

export default ReachByDate;
