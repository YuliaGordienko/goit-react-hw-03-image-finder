import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import Loader from "../Loader/loader";

export default class Searcbarinfo extends Component {
  state = {
    value: null,
    loading: false,
    page: 1,
    showModal: this.props.showModal,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevEnter = prevProps.value;
    const nextEnter = this.props.value;

    if (prevEnter !== nextEnter) {
      this.setState({ value: null });
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${nextEnter}&page=${this.state.page}&key=22502202-f847ab35a707d5e3f99b1114d&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.hits.length === 0) {
            toast("Try to search something else");
          }
          this.setState({ value: res.hits });
        })

        .finally(() => this.setState({ loading: false }));
    }
    if (prevState.page !== this.state.page) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${nextEnter}&page=${this.state.page}&key=22502202-f847ab35a707d5e3f99b1114d&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then((res) => {
          this.setState((prevState) => ({
            value: [...prevState.value, ...res.hits],
          }));
        })

        .finally(() => {
          this.setState({ loading: false });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        });
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div>
        {this.state.loading && <Loader />}
        {this.state.value && <ImageGalleryItem array={this.state.value} />}
        {this.state.value && this.state.value.length > 0 && (
          <Button handleClick={this.handleClick} />
        )}
      </div>
    );
  }
}
