import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Counter from 'ui/components/Counter';

describe('Match <Counter/> Snapshot', () => {
   it('Matches the previous snapshot of the component', () => {
     const component = shallow((
       <Counter />
     ));
     expect(shallowToJson(component)).toMatchSnapshot();
   });
 });

describe('Test <Counter/>', () => {
   
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

