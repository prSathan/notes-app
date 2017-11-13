import React from 'react';
import { shallow } from 'enzyme';
import AddNote from './AddNote';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('AddNote component', () => {
  it('Should render successfully', () => {
    const component = shallow(<AddNote />);
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
   const component = shallow(<AddNote />);
   expect(component.find('.note-input').length).toEqual(1);
 });
});
