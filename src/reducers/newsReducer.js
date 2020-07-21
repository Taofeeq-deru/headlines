import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const newsReducer = (
  state = { isLoading: false, hasError: false, data: {} },
  action
) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        data: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
};

export default newsReducer;
