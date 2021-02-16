import * as React from 'react';

import { Wrapper, Container, CardTitle, CardBody } from './styles';

type Props = {
  children: JSX.Element;
};

const Header: React.FunctionComponent = ({ children }: Props) => {
  const thinTitle = `Let's plan your `;
  const boldTitle = `saving goal.`;

  return (
    <>
      <Wrapper>
        <Container>
          <CardTitle>
            <span>
              {thinTitle}
              <strong>{boldTitle}</strong>
            </span>
          </CardTitle>
          <CardBody>{children}</CardBody>
        </Container>
      </Wrapper>
    </>
  );
};

export default Header;
