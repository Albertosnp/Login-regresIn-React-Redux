import { logoutUser } from "services/login";

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
