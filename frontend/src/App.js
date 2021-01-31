import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/loginPage";
import Register from "./components/auth/register";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Blog from "./components/blog&category/Blog";
import Category from "./components/blog&category/Category";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <h1>Namastey, Welcome to EKVICHAR.COM</h1>
      </Route>
      <Route path="/homepage" component={Homepage} />
      <Route exact path="/loginpage" component={Loginpage} />
      <Route exact path="/blog/:id" component={Blog} />
      <Route exact path="/categories" component={Category} />
      <Route exact path="/signin" component={Loginpage} />
      <Route exact path="/signup" component={Register} />
    </div>
  );
}

export default App;
