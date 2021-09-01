import React, { Component } from "react";
import s from "./Modal.module.css";
class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.toggle();
    }
  };
  handleBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      this.props.toggle();
    }
  };
  render() {
    return (
      <div className={s.Overlay} onClick={this.handleBackdrop}>
        <div className={s.Modal}>
          <img src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;
