import { SHOW_SEARCH } from "../actions";

const searchReducer = (state = "hide", action) => {
  switch (action.type) {
    case SHOW_SEARCH:
      return "show";
    default:
      return state;
  }
};

export default searchReducer;
