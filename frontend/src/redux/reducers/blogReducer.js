const initialState = {
  blogs: "",
  lastBlog: "",
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return {
        ...state,
        blogs: action.payload,
      };
    case "LAST_BLOG":
      return {
        ...state,
        lastBlog: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default blogsReducer;
