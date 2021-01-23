const initialState = {
  users: [],
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return {
        ...state,
        users: [...state.users, action.data],
      };
    default:
      return {
        ...state,
      };
  }
};

export default blogsReducer;
