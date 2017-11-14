import actions from '.';
import types from '../constants/';

describe('Actions', () => {
  const noteText = 'A note';

  it('Should create an action to add a note', () => {
    const expectedAction = {
      type: types.SUBMIT_NOTE,
      id: 1,
      text: noteText,
    };

    expect(actions.submitNote(noteText)).toEqual(expectedAction);
  });
});
