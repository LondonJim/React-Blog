import React from 'react'
import ReactDOM from 'react-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import App from '../src/App'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains("Todo's")).toEqual(true)
});

describe('deleteTodo', () => {

  it('removes todo from state todo list', () => {
    const wrapper = shallow(<App />).instance()
    wrapper.state = {todos:[{id: 1, content: 'buy some milk'},
                            {id: 2, content: 'pick up package'}]}
    wrapper.deleteTodo(1)
    expect(wrapper.state.todos).toEqual([{id: 2, content: 'pick up package'}])
  })

})

describe('addTodo', () => {

  it('adds todo from state todo list if todos already exist', () => {
    const wrapper = shallow(<App />).instance()
    wrapper.state = {todos:[{id: 1, content: 'buy some milk'},
                            {id: 2, content: 'pick up package'}]}
    wrapper.addTodo({content: 'mail letters'})
    expect(wrapper.state.todos).toEqual([{id: 1, content: 'buy some milk'},
                                         {id: 2, content: 'pick up package'},
                                         {id: 3, content: 'mail letters'}])
  })

  it('adds todo from state todo list if list is empty', () => {
    const wrapper = shallow(<App />).instance()
    wrapper.state = {todos:[]}
    wrapper.addTodo({content: 'mail letters'})
    expect(wrapper.state.todos).toEqual([{id: 1, content: 'mail letters'}])
  })

})
