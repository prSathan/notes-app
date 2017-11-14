import React from 'react';
import PropTypes from 'prop-types';

const AddNote = ({ submitNote }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitNote(input.value);
          input.value = '';
        }}
      >

        <input
          className="note-input"
          ref={(element) => {
            input = element;
          }}
        />

        <button type="submit" className="note-submit">
          Add Note
        </button>
      </form>
    </div>
  );
};

AddNote.propTypes = {
  submitNote: PropTypes.func.isRequired,
};

export default AddNote;
