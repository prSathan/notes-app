import React from 'react';
import PropTypes from 'prop-types';

const NoteList = ({ notes }) => {
  const noteItems = notes.map(note => (
    <li key={note.id}>
      <span className="note-text">{note.text}</span>
    </li>
  ));

  return (
    <ul>
      {noteItems}
    </ul>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default NoteList;
