import types from '../constants/';

let noteId = 0;

const nextId = () => {
  noteId += 1;
  return noteId;
};

const actions = {
  submitNote(text) {
    return {
      type: types.SUBMIT_NOTE,
      id: nextId(),
      text,
    };
  },
};

export default actions;
