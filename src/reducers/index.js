import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import newsReducer from "./newsReducer";
import modalReducer from "./modalReducer";
import searchReducer from "./searchReducer";
import thunk from "redux-thunk";

const allReducers = combineReducers({
  news: newsReducer,
  modal: modalReducer,
  search: searchReducer,
});

const middleWare = [thunk];

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
