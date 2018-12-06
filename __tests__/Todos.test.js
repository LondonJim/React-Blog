import React from 'react';
import ReactDOM from 'react-dom';
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme';

import Todos from '../src/Todos';

describe("Todos", () => {
  it("Todos should render todo list",() => {
    const props = {todos : [
      { id: 1, content:'buy some milk'}
    ]};
    const wrapper = mount(<Todos {...props} />)

    expect(wrapper.contains("buy some milk")).toEqual(true)
  });

  it("Todos should render no todo list",() => {
    const props = {todos : []};
    const wrapper = mount(<Todos {...props} />)

    expect(wrapper.contains("You have no todos")).toEqual(true)
  });
});
