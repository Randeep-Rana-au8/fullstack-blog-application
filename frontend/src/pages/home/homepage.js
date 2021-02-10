import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetch_blog, last_blog } from "../../redux/actions/allActions";
import LatestBlog from "../../componets/posts&categories/letestPost";
import AllBlogs from "../../componets/posts&categories/allPosts/allPosts";
// import RestBlogs from "../componets/posts&categories/";
import TopCreators from "../../componets/creators/topcreators";
import Categories from "../../componets/posts&categories/categories";
import "./homepage.css";
import Spinner from "../../componets/spinner/spinner";
import { fetchHomeData } from "../../redux/actions/fetchdata";

const Homepage = ({ state }) => {
  // const { blogs, lastBlog } = state.blogsReducer;
  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get("http://localhost:5000/allpost");
  //     console.log(result)
  //     fetch_blog(result.data);
  //     last_blog(result.data);
  //   }
  //   fetchData();
  // }, []);
  

  return (
    <div className="homepage">
      {blogs ? (
        <>
          <section className="topSection">
            <div className="mycontainer">
              <LatestBlog data={lastBlog} />
              <AllBlogs data={blogs} />
              <TopCreators />
            </div>
          </section>
          <section id="category">
            <hr />
            <Categories />
          </section>
          <section>
            <hr />

            <div className="mycontainer">
              {/* <RestBlogs data={blogs} /> */}
            </div>
          </section>
        </>
      ) : (
        <div className="loadingSpinner">
          <Spinner />
        </div>
      )}
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
