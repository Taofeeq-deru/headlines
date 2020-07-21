import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const newsReducer = (
  state = {
    isLoading: false,
    placeHolder: true,
    hasError: false,
    success: false,
    data: {},
    errMessage: "",
  },
  action
) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
        placeHolder: false,
        hasError: false,
        success: false,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        placeHolder: false,
        hasError: false,
        success: true,
        data: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        placeHolder: true,
        hasError: true,
        success: false,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
