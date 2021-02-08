import React from "react";
import Loader from "react-loader-spinner";
export default class App extends React.Component {
  render() {
    return <Loader type="Puff" color="#00BFFF" height={150} width={150} timeout={300000} />;
  }
}
