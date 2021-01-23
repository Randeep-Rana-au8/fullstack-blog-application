const initialState = {
  blogs: [],
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return {
        ...state,
        blogs: [...state.blogs, action.data],
      };
    default:
      return {
        ...state,
      };
  }
};

export default blogsReducer;
