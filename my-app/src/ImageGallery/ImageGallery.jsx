import React, { Children } from "react";
import s from "./ImageGallery.module.css";
const ImageGallery = (children) => {
  return (
    <>
      <ul className={s.ImageGallery}></ul>
      {Children}
    </>
  );
};
export default ImageGallery;
