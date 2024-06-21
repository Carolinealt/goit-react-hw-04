import { useContext } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { imageContext } from "../Context";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  const { changeImgData } = useContext(imageContext);

  const handle = (img) => {
    const imgData = {
      src: img.urls.full,
      alt: img.alternative_slugs.en,
      likes: img.likes,
      location: img.user.location,
      desc: img.alt_description,
    };
    changeImgData(imgData);
  };

  return (
    <ul className={css.list}>
      {images.map((image) => {
        return (
          <li key={`${image.id}${Math.random()}`} className={css.listItem}>
            <a href="#" onClick={() => handle(image)}>
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
