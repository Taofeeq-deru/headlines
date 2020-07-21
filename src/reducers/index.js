import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import newsReducer from "./newsReducer";
import modalReducer from "./modalReducer";
import thunk from "redux-thunk";

const allReducers = combineReducers({ news: newsReducer, modal: modalReducer });

const middleWare = [thunk];

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
