import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/loginPage";
import Register from "./components/auth/register";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Blog from "./components/blog&category/Blog";
import Categories from "./components/blog&category/Categories";
import Footer from "./components/Footer/Footer";
import NewBlog from "./components/blog&category/AddBlog/NewBlog";
import Category from "./components/blog&category/category/Category";
import WelcomePage from "./Pages/Welcome/WelcomePage";

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
      <Route exact path="/addpost" component={NewBlog} />
      <Route exact path="/category/:name" component={Category} />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
