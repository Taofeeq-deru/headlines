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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
