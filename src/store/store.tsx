import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "reducers/usersReducer";
import { loginReducer } from "reducers/loginReducer";

// Para combinar reducers -> almacena la información de login y usuarios a mostrar
const reducer = combineReducers({
  users: usersReducer,
  login: loginReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
