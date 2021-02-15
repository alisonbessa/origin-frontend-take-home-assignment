import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

const wrapper = shallow(<Header />);

describe('Header rendering', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an image with source', () => {
    expect(wrapper.find('img').prop('src')).toBeTruthy();
  });
});
