import axios from "axios";

const initialState = {
  blogs: "",
  lastBlog: "",
  categories: [],
};

const blogsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case "ADD_BLOG":
      axios
        .post("https://myvicharbackend.herokuapp.com/api/blog", payload)
        .then((res) => console.log(res))
        .then((err) => console.log(err));

      return {
        ...state,
        blogs: [...state.blogs, payload],
      };
    case "FETCH_BLOG":
      return {
        ...state,
        blogs: payload,
      };
    case "LAST_BLOG":
      return {
        ...state,
        lastBlog: payload,
      };
    case "ADD_CATEGORIES":
      return {
        ...state,
        categories: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default blogsReducer;
