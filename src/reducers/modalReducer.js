import { HIDE_MODAL } from "../actions";

const modalReducer = (state = true, action) => {
  switch (action.type) {
    case HIDE_MODAL:
      return (state = false);
    default:
      return state;
  }
};

export default modalReducer;
