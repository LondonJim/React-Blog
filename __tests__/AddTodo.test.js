import React from 'react'
import ReactDOM from 'react-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import AddTodo from '../src/AddTodo'

it('renders Add new todo text', () => {
  const wrapper = shallow(<AddTodo />)
  expect(wrapper.contains("Add new todo:")).toEqual(true)
})

describe('Todo input', () => {

  it('should respond to change event and change the state of the AddTodo', () => {
    const wrapper = mount(<AddTodo />)
    const todoInput = wrapper.find('#add-todo')
    todoInput.instance().value = "Take cat to vet"
    todoInput.simulate('change')

    expect(wrapper.state('content')).toEqual('Take cat to vet')
  })

  it('should respond to submit event', () => {
    let mockAddTodo = jest.fn()
    const wrapper = mount(<AddTodo addTodo={mockAddTodo}/>)
    const todoInput = wrapper.find('#add-todo')
    todoInput.instance().value = "Take cat to vet"
    const submitTodoInput = wrapper.find('#submit-form')
    submitTodoInput.simulate('submit')

    expect(wrapper.state('content')).toEqual('')
  })
})
