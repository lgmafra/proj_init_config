import React from 'react';
import { shallow } from 'enzyme';
import Login from '../src/pages/Login';

describe('test Login page component', () => {
  const wrapper = shallow(<Login />);

  const loginText = 'sthima@sthima.com';
  const passwordText = 'sthima';

  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  const email = wrapper.findWhere(node => node.prop('testID') === 'email');
  const password = wrapper.findWhere(node => node.prop('testID') === 'password');
  const loginButton = wrapper.findWhere(node => node.prop('testID') === 'loginButton');

  it('login page has 2 inputs', () => {
    expect(email.exists()).toBe(true);
    expect(password.exists()).toBe(true);
  });

  it('login page has login button', () => {
    expect(loginButton.exists()).toBe(true);
  });

  it('can do login', () => {
    email.props().onChangeText(loginText);
    password.props().onChangeText(passwordText);

    loginButton.props().onPress();
  });
});
