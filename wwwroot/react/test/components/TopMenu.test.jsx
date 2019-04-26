import React from 'react';
import { shallow, mount } from 'enzyme';
import TopMenu from 'ui/components/TopMenu';

describe('Test <TopMenu/>', () => {
     it('renders the TopMenu component successfully', () => {
        const wrapper = shallow(<TopMenu/>);
        expect(wrapper.exists()).toEqual(true);
     });

     it('defaults the leftmost button to "browse" when to prop is passed', () => {
        const wrapper = shallow(<TopMenu/>);
        const instance = wrapper.instance();
        expect(instance.props.testItem).toEqual('Browse');
     });
  });

