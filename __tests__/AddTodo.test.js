import React from 'react'
import ReactDOM from 'react-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import AddTodo from '../src/AddTodo'

it('renders Add new todo text', () => {
  const wrapper = shallow(<AddTodo />);
  expect(wrapper.contains("Add new todo:")).toEqual(true)
})
