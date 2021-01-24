const initialState = {
  blogs: [],
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return {
        ...state,
        blogs: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default blogsReducer;
