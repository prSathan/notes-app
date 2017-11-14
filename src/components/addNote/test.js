import React from 'react';
import { shallow, mount } from 'enzyme';
import AddNote from './AddNote';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Addnote component', () => {
  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddNote
        submitNote={submitMock}
      />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    expect(component.find('.note-input').length).toEqual(1);
  });

  describe('Add note button', () => {
    it('Should exist', () => {
      expect(component.find('.note-submit').length).toEqual(1);
    });

    it('Should call the submitnote function when clicked', () => {
      component = mount(<AddNote submitNote={submitMock} />);

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });
});
