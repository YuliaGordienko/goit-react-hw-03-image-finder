import Loader from "react-loader-spinner";
import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default class Spinner extends Component {
  //other logic
  render() {
    return (
      <div>
        <Loader
          type="Hearts"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000}
        />
      </div>
    );
  }
}
