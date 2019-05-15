import {
  /* we need our action types here*/

  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  console.log("charsReducer", action);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCH_CHAR_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        characters: [action.payload]
      };
    case FETCH_CHAR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
