import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/loginPage";
// import  Login  from "./components/userRegistration/login";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Blog from "./components/blog&category/Blog";

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
    </div>
  );
}

export default App;
