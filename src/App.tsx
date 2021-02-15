import * as React from 'react';

import { GlobalStyles } from './styles/globalStyles';
import SavingGoal from './pages/SavingGoal';

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyles />
      <SavingGoal />
    </>
  );
};

export default App;
