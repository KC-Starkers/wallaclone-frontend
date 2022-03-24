import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "./reducers";
import thunk from "redux-thunk";
import * as auth from "../components/auth/service";
import * as adverts from "../apicalls";

const api = { auth, adverts };
const rootReducer = combineReducers(reducers);

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("***********dispatching action***********", action);
      next(action);
      console.log("**********new state************", store.getState());
    };
  };
};

const configureStore = (preloadedState) => {
  const middleware = [thunk.withExtraArgument({ api }), logger];
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
};

export default configureStore;
