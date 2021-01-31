import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/loginPage";
import  Ragister  from "./components/auth/ragister";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <h1>Namastey, Welcome to EKVICHAR.COM</h1>
      </Route>
      <Route path="/homepage" component={Homepage} />
      <Route exact path="/signin" component={Loginpage} />
      <Route exact path="/signup" component={Ragister} />
    </div>
  );
}

export default App;
