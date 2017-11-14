import React from 'react';

const AddNote = () => (
  <div>
    <form>
      <input className="note-input" />
      <button type="submit" className="note-submit">
        Add Note
      </button>
    </form>
  </div>
);

export default AddNote;
