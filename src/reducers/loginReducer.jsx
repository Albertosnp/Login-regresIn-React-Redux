import { logoutUser } from "services/login";

const initialState = {
  isAuthenticated: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@login/logIn":
      return {
        isAuthenticated: true,
      };
    case "@login/logOut":
      return {
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

export const logIn = () => {
  return {
    type: "@login/logIn",
    payload: {
      isAuthenticated: true,
    },
  };
};

export const logInWithToken = () => {
  return {
    type: "@login/logIn",
    payload: {
      isAuthenticated: true,
    },
  };
};
