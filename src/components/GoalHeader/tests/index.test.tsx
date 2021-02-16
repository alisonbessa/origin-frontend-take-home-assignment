import * as React from 'react';
import { shallow, mount } from 'enzyme';
import GoalHeader from '../index';

import house from '../../../icons/house.svg';
import { Title } from '../styles';

const logo = <img src={house} />;
const title = 'Buy a house';
const wrapper = mount(<GoalHeader title={title} logo={logo} />);

describe('GoalHeader rendering', () => {
  it('should render an image with source', () => {
    expect(wrapper.find('img').prop('src')).toBeTruthy();
  });

  it('should render two spans', () => {
    expect(wrapper.find('span').length).toEqual(2);
  });

  it('should a title based on props title', () => {
    expect(
      wrapper.containsMatchingElement(<Title>{title}</Title>)
    ).toBeTruthy();
  });
});
