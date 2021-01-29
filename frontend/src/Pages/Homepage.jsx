import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { add_blog, last_blog } from "../redux/actions/allActions";
import LatestBlog from "../components/blog&category/LatestBlog";
import AllBlogs from "../components/blog&category/AllBlogs";
import TopCreators from "../components/Creators/TopCreators";

const Homepage = ({ state, add_blog, last_blog }) => {
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
    <div className="homepage">
      <section>
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
      <section>
        <h1>Categories</h1>
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

export default connect(mapStateToProps, { add_blog, last_blog })(Homepage);
