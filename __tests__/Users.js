import React from 'react';
import ReactDOM from 'react-dom';
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme';

import Users from '../src/Users';

describe("Users", () => {
  it("Users should render properly",() => {
    const props = {users : [
      { name: "John", age: 33, interests: "Running", id: 1},
    ]};
    
    const wrapper = mount(<Users {...props} />);

  });
});
