import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { add_blog, last_blog } from "./redux/actions/allActions";
import Navbar from "./components/Navbar/Navbar";
import LatestBlog from "./components/blog&category/LatestBlog";
import AllBlogs from "./components/blog&category/AllBlogs";
import "./App.css";
import Input from "./components/Input";

function App({ state, add_blog, last_blog }) {
  const { blogs, lastBlog } = state.blogsReducer;
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://myvicharbackend.herokuapp.com/api/posts");
      add_blog(result.data);
      last_blog(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Input />

      <Navbar />
      <section>
        {blogs ? (
          <div className="container">
            <LatestBlog data={lastBlog} />
            <AllBlogs data={blogs} />
          </div>
        ) : (
          "Loading..."
        )}
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { add_blog, last_blog })(App);
