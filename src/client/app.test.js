import App from './app';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
    test('Should match snapshot', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('div').text()).toBe('Welcome to React Boilerplate App. Zomg.');
        expect(wrapper).toMatchSnapshot();
    })
})