import axios from "axios";
// import { response } from "../../../../backend/routes/auth";

const initialState = {
  posts: [],
  lastposts: "",
  categories: [],
};


const blogsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  const headers = {
    "Content-Type":"application/json",
    "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
  switch (type) {
    case "ADD_BLOG":
      axios
        .post("http://localhost:5000/createpost",
         payload, {headers: headers})
        .then(function (res) {
          console.log(res.post)
          return {
            ...state,
            posts: [...state.posts, res],
          };
        } )
        .then((err) => console.log(err));

      
    case "FETCH_BLOG":
      return {
        ...state,
        posts: payload,
      };
    case "LAST_BLOG":
      return {
        ...state,
        lastposts: payload,
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
