import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Searchbar from "./Searchbar/Searchbar";
import Searcbarinfo from "./Searchbarinfo/Searchbarinfo";

class App extends Component {
  state = {
    value: "",
  };
  handleSubmit = (value) => {
    this.setState({ value });
  };
  // toggleModal = () => {
  //   this.setState((state) => ({
  //     showModal: !state.showModal,
  //   }));
  // };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <Searcbarinfo value={this.state.value} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
export default App;
