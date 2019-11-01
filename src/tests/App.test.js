import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });

describe('jest test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('enzyme test', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders loader', () => {
    const wrapper = mount(<App title="Huckleberry Finn" />);
    expect(wrapper.find('div#loader').length).toBe(1);
  });
});

