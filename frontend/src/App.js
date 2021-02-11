import Homepage from "./pages/home/hometest";
import Loginpage from "./componets/auth/login";
import Register from "./componets/auth/signup";
import { Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ProfilePage from "./pages/profile/proflePage";
// import Blog from "./components/blog&category/Blog";
// import Categories from "./components/blog&category/Categories";
// import Footer from "./components/Footer/Footer";
import NewPost from "./componets/posts&categories/addPosts/addPosts";
// import Category from "./components/blog&category/category/Category";
import WelcomePage from "./pages/welcome";
// import NewFooter from "./components/Footer/NewFooter";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <hr />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/homepage" component={Homepage} />
      {/* <Route exact path="/loginpage" component={Loginpage} />
      <Route exact path="/blog/:id" component={Blog} /> */}
      {/* <Route exact path="/categories" component={Categories} /> */}
      <Route exact path="/signin" component={Loginpage} />
      <Route exact path="/signup" component={Register} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/addpost" component={NewPost} />
      {/* <Route exact path="/category/:name" component={Category} /> */}
      <hr />
      {/* <NewFooter /> */}
    </div>
  );
}

export default App;
