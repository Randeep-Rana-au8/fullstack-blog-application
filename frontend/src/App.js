import { connect } from "react-redux";
import "./App.css";
import { add_blog } from "./redux/actions/allActions";
import { useEffect } from "react";

import axios from "axios";
import Navbar from "./components/Navbar/Navbar";

function App({ state, add_blog }) {
  useEffect(() => {
    const result = axios
      .get("https://myvicharbackend.herokuapp.com/api/posts")
      .then((res) => add_blog(res.data));
  }, []);

  return (
    <div className="App">
      <Navbar />
      {state.blogsReducer.blogs.map((blog) => (
        <div>
          <h1>{blog.title}</h1>
          <img src={blog.imageUrl} />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { add_blog })(App);
