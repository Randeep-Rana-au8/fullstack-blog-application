import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetch_blog, last_blog } from "../redux/actions/allActions";
import LatestBlog from "../components/blog&category/LatestBlog";
import AllBlogs from "../components/blog&category/AllBlogs/AllBlogs";
import RestBlogs from "../components/blog&category/homeBlogs/RestBlogs";
import TopCreators from "../components/Creators/TopCreators";
import Category from "../components/blog&category/Category";
import "./Homepage.css";

const Homepage = ({ state, fetch_blog, last_blog }) => {
  const { blogs, lastBlog } = state.blogsReducer;

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://myvicharbackend.herokuapp.com/api/posts");
      fetch_blog(result.data);
      last_blog(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="homepage">
      <section className="topSection">
        {blogs ? (
          <div className="container">
            <LatestBlog data={lastBlog} />
            <AllBlogs data={blogs} />
            <TopCreators />
          </div>
        ) : (
          "Loading..."
        )}
      </section>
      <section id="category">
        <hr />
        <Category />
      </section>
      <section>
        <hr />
        {blogs ? (
          <div className="container">
            <RestBlogs data={blogs} />
          </div>
        ) : (
          "Loading..."
        )}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { fetch_blog, last_blog })(Homepage);
