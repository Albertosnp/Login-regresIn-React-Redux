import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Para combinar reducers
const reducer = combineReducers({});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
