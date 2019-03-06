import { CHAR_FETCHING, CHAR_SUCCESS, CHAR_FAILURE } "../actions";
const initialState = {
  fetching: false,
  error: '',
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAR_FETCHING:
      return {
        ...state,
        error: '',
        fetching: true
      };
    case CHAR_SUCCESS:
      return {
        ...state,
        error: '',
        fetching: false,
        characters: action.payload
      };
    case CHAR_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
