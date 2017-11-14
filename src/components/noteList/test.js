import React from 'react';
import { shallow } from 'enzyme';
import NoteList from './NoteList';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('NoteList component', () => {
  const notes = [
    {
      id: 1,
      text: 'A note',
    },
  ];

  const component = shallow(<NoteList notes={notes} />);

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should display a todo when passed in as a prop', () => {
    expect(component.find('.note-text').text()).toEqual(notes[0].text);
  });
});
