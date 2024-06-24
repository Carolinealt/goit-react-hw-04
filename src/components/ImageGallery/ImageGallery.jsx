import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({
  images,
  setImgData,
  setCurrentImage,
  handleOpenModal,
}) => {
  return (
    <ul className={css.list}>
      {images.map((image) => {
        return (
          <li key={`${image.id}${Math.random()}`} className={css.listItem}>
            <button className={css.btnCard}>
              <ImageCard
                image={image}
                setImgData={setImgData}
                setCurrentImage={setCurrentImage}
                handleOpenModal={handleOpenModal}
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
