import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/loginPage";
import Register from "./components/auth/register";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Blog from "./components/blog&category/Blog";
import Profile from './components/profile/Profile'
import Categories from "./components/blog&category/Categories";
// import Footer from "./components/Footer/Footer";
import NewBlog from "./components/blog&category/AddBlog/NewBlog";
import Category from "./components/blog&category/category/Category";
import WelcomePage from "./Pages/Welcome/WelcomePage";
import NewFooter from "./components/Footer/NewFooter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/homepage" component={Homepage} />
      <Route exact path="/loginpage" component={Loginpage} />
      <Route exact path="/blog/:id" component={Blog} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/signin" component={Loginpage} />
      <Route exact path="/signup" component={Register} />
      <Route exact path="/myProfile" component={Profile} />
      <Route exact path="/addpost" component={NewBlog} />
      <Route exact path="/category/:name" component={Category} />
      <hr />
      <NewFooter />
    </div>
  );
}

export default App;
