import { getAllUsers } from "services/users";

const initialState = {
  usersToShow: [],
};
//Reducer
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@usersToShow/init":
      return {
        ...state,
        usersToShow: action.users,
      };
    default:
      return state;
  }
};
// Action Creators 
export const initUsersToShow = () => {
  return async (dispatch) => {
    const users = await getAllUsers();
    dispatch({
      type: "@usersToShow/init",
      payload: users,
    });
  };
};
