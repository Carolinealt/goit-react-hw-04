import { useContext } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { imageContext } from "../Context";

const ImageGallery = ({ images }) => {
  const { changeImgData } = useContext(imageContext);

  const handle = (img) => {
    const imgData = { src: img.urls.small, alt: img.alternative_slugs.en };
    changeImgData(imgData);

  };

  return (
    <ul>
      {images.map((image) => {
        return (
          <li key={image.id}>
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
