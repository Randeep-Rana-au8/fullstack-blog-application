import { connect } from "react-redux";
import "./App.css";

function App({ state }) {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(App);
