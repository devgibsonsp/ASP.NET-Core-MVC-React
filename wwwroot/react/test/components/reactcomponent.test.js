import React from 'react';
import { shallow, mount } from 'enzyme';
import Counter from 'ui/reactcomponent';

describe('Test Counter component', () => {
     it('renders the counter component successfully', () => {
        const wrapper = shallow(<Counter/>);
        expect(wrapper.exists()).toEqual(true);
     });

     it('increments the counter when clicked', () => {
        const wrapper = shallow(<Counter/>);
        const instance = wrapper.instance();
        expect(instance.state.currentCount).toEqual(0);
        instance.incrementCounter();
        expect(instance.state.currentCount).toEqual(1);

     });
  });

