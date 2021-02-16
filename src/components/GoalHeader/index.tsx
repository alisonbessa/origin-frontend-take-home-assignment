import * as React from 'react';

import { Container, Title, SubTitle } from './styles';

type Props = {
  title?: string;
  logo: JSX.Element;
};

const Header: React.FunctionComponent<Props> = ({ logo, title }) => {
  return (
    <>
      <Container>
        {logo}
        <Title>{title}</Title>
        <SubTitle>Saving goal</SubTitle>
      </Container>
    </>
  );
};

export default Header;
