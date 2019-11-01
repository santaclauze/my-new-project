import { configure, mount } from "enzyme";
import React from "react";
import Adapter from 'enzyme-adapter-react-16';

import ChuckComponent from '../../components/ChuckComponent';

configure({ adapter: new Adapter() });

describe('component Chuck test', () => {
  it('should renders image and text', () => {
    const mockedData = {
      categories: [],
      created_at: 'now',
      icon_url: 'myUrl',
      value: 'my test value',
    };
    const wrapper = mount(<ChuckComponent data={mockedData} />);
    expect(wrapper.find('img').props().src).toEqual(mockedData.icon_url);
    expect(wrapper.find('p').text()).toEqual('my test value');
  });
});
