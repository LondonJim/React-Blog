import React from 'react';
import ReactDOM from 'react-dom';
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme';

import App from '../src/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains("Todo's")).toEqual(true)
});
