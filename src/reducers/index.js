import types from '../constants/';

export const initialState = {
  notes: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SUBMIT_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };

    default:
      return state;
  }
};

export default reducer;
