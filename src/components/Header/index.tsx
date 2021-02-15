import * as React from 'react';

import { Container } from './styles';

import logo from '../../icons/logo.svg';

const Header: React.FunctionComponent = () => {
  return (
    <>
      <Container>
        <img src={logo} />
      </Container>
    </>
  );
};

export default Header;
