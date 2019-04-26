import React from 'react';
import { shallow, mount } from 'enzyme';
import InputForm from 'ui/components/InputForm';

describe('Test <InputForm/>', () => {
     it('renders the InputForm component successfully', () => {
        const wrapper = shallow(<InputForm/>);
        expect(wrapper.exists()).toEqual(true);
     });
  });

