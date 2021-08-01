import { getAllUsersPerPage } from "services/users";

const initialState = {
  usersToShow: [],
};
/** Reducer */
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@usersToShow/init":
      return {
        usersToShow: action.payload,
      };
    default:
      return state;
  }
};

/** Action Creators */
export const usersToShow = (page = 1) => {
  return async (dispatch) => {
    const users = await getAllUsersPerPage(page);
    dispatch({
      type: "@usersToShow/init",
      payload: users,
    });
  };
};
