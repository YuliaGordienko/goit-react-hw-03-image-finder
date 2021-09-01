import React, { Component } from "react";
import s from "./Button.module.css";
class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.handleClick}
        type="button"
        className={s.buttonLoad}
      >
        Load more
      </button>
    );
  }
}
export default Button;
