import React, { Component } from "react";
import s from "./ImageGalleryItem.module.css";
import Modal from "../Modal/Modal";
class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    largeImageURL: "",
  };
  toggleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };
  handleClickImg = (e) => {
    this.setState({
      largeImageURL: e.target.dataset.url,
    });

    this.toggleModal();
  };

  render() {
    return (
      <>
        <ul className={s.ImageGallery}>
          {this.props.array.map((item) => (
            <li
              key={item.id}
              className={s.ImageGalleryItem}
              onClick={this.handleClickImg}
            >
              <img
                src={item.webformatURL}
                alt={item.tag}
                className={s.ImageGalleryItemimage}
                data-url={item.largeImageURL}
              />
            </li>
          ))}
        </ul>
        {this.state.showModal && (
          <Modal url={this.state.largeImageURL} toggle={this.toggleModal} />
        )}
      </>
    );
  }
}
export default ImageGalleryItem;
