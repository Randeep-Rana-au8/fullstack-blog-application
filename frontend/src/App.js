import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./App.css";
import { add_blog, last_blog } from "./redux/actions/allActions";
import Navbar from "./components/Navbar/Navbar";

function App({ state, add_blog, last_blog }) {
  const allBlogs = state.blogsReducer.blogs;
  const latestBlog = state.blogsReducer.lastBlog;
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://myvicharbackend.herokuapp.com/api/posts");
      console.log(result);
      add_blog(result.data);
      last_blog(result.data);
    }

    fetchData();
  }, []);

  console.log(allBlogs);

  return (
    <div className="App">
      <Navbar />
      <section>
        {allBlogs ? (
          <div className="container">
            <div className="latestBlog">
              <img height="120px" src={latestBlog.imageUrl} alt="Latest blog image" />
              <h3>Last blog {latestBlog.title}</h3>
              <p>{latestBlog.description}</p>
            </div>
            <div className="allBlogs">
              {state.blogsReducer.blogs.map((blog) => (
                <div key={blog.id} className="blog">
                  <h5>{blog.title}</h5>
                  <img height="100px" src={blog.imageUrl} />
                </div>
              ))}
            </div>
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
// {
//   state.blogsReducer.blogs.map((blog) => (
//     <div className="container">
//       <h1>{blog.title}</h1>
//       <img height="100px" src={blog.imageUrl} />
//     </div>
//   ));
// }
