import types from '../constants/';
import { reducer, initialState } from '.';

describe('Reducer', () => {
  const noteText = 'A note';

  it('Should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit note', () => {
    it('Should return the correct state', () => {
      const action = {
        type: types.SUBMIT_NOTE,
        id: 1,
        text: noteText,
      };

      const expectedState = {
        notes: [
          {
            id: 1,
            text: noteText,
          },
        ],
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});
