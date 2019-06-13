import React from 'react';
import { shallow } from 'enzyme';
import Intro from '../src/pages/Intro';

describe('test Intro page component', () => {
  const mockProps = {
    navigation: { navigate: jest.fn() },
  };

  const wrapper = shallow(<Intro {...mockProps} />);

  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('intro page has 2 buttons', () => {
    expect(wrapper.find('TouchableOpacity').length).toBe(2);
  });

  const loginButton = wrapper.findWhere(node => node.prop('testID') === 'buttonLogin');
  const newAccountButton = wrapper.findWhere(node => node.prop('testID') === 'buttonNewAccount');

  it('login button exists', () => {
    expect(loginButton.exists()).toBe(true);
  });

  it('press dont crash', () => {
    loginButton.props().onPress();
  });

  it('new account button exists', () => {
    expect(newAccountButton.exists()).toBe(true);
  });

  it('press dont crash', () => {
    loginButton.props().onPress();
  });
});
