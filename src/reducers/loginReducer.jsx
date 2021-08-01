import { loginUser, logoutUser } from "services/login";

const initialState = {
  isAuthenticated: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@login/logIn":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "@login/logOut":
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

// Action Creators
export const logOut = () => {
  return async (dispatch) => {
    await logoutUser();
    dispatch({
      type: "@login/logOut",
      payload: {
        isAuthenticated: false,
      },
    });
  };
};

export const logIn = (userName, password) => {
  return async (dispatch) => {
    const isAuthenticated = await loginUser(userName, password);
    dispatch({
      type: "@login/logIn",
      payload: {
        isAuthenticated,
      },
    });
  };
};
