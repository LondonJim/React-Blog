import React from 'react'
import ReactDOM from 'react-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import Todos from '../src/Todos'

describe("Todos", () => {
  it("should render todo list",() => {
    const props = {todos : [
      { id: 1, content:'buy some milk'}
    ]};
    const wrapper = mount(<Todos {...props} />)

    expect(wrapper.contains("buy some milk")).toEqual(true)
  });

  it("should render no todo list",() => {
    const props = {todos : []};
    const wrapper = mount(<Todos {...props} />)

    expect(wrapper.contains("You have no todos")).toEqual(true)
  });

  it("executes deleteTodo function when clicked",() => {
    const props = {todos : [{ id: 1, content:'buy some milk'}],
                   deleteTodo: jest.fn()}
    const wrapper = mount(<Todos {...props} />)
    wrapper.find('span').simulate('click')

    expect(props.deleteTodo).toHaveBeenCalled()
  });
});
