import { useContext, useEffect, useRef } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { imageContext } from "../Context";
const ImageGallery = ({ images }) => {
  const value = useContext(imageContext);
  let clickedImg = {};

  useEffect(() => {
    console.log("log after ue", value);
  }, [value]);

  const handle = (e) => {
    e.preventDefault();
    clickedImg = e.target;
    value.changeImgData({ src: clickedImg.src, alt: clickedImg.alt });
    console.log("log before ue", value);
  };
  return (
    <ul>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <a href="#" onClick={handle}>
              <ImageCard
                src={image.urls.small}
                alt={image.alternative_slugs.en}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
