const initialState = {
  usersToShow: [],
};

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
