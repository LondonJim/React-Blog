import React from 'react';
import ReactDOM from 'react-dom';
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme';

import AddUser from '../src/AddUser';

describe('Name input', () => {

  it('renders name input', () => {
    const wrapper = shallow(<AddUser />)
    expect(wrapper.find('#name').length).toEqual(1)
  });

  it('should respond to change event and change the state of the AddUser Component', () => {
    const wrapper = mount(<AddUser />);
    const nameInput = wrapper.find("#name")
    nameInput.instance().value = "Jimmy"
    nameInput.simulate('change');

    expect(wrapper.state('name')).toEqual('Jimmy');
  })
})

describe('Age input', () => {

  it('renders age input', () => {
    const wrapper = shallow(<AddUser />)
    expect(wrapper.find('#age').length).toEqual(1)
  });

  it('should respond to change event and change the state of the AddUser Component', () => {
    const wrapper = mount(<AddUser />);
    const nameInput = wrapper.find("#age")
    nameInput.instance().value = "40"
    nameInput.simulate('change');

    expect(wrapper.state('age')).toEqual('40');
  })
})

describe('Interests input', () => {

  it('renders interests input', () => {
    const wrapper = shallow(<AddUser />)
    expect(wrapper.find('#interests').length).toEqual(1)
  });

  it('should respond to change event and change the state of the AddUser Component', () => {
    const wrapper = mount(<AddUser />);
    const nameInput = wrapper.find("#interests")
    nameInput.instance().value = "Coding"
    nameInput.simulate('change');

    expect(wrapper.state('interests')).toEqual('Coding');
  })
})
