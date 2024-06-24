import css from "./ImageCard.module.css";

const ImageCard = ({ image, setImgData, setCurrentImage, handleOpenModal }) => {
  const handle = (e) => {
    const imgData = {
      src: image.urls.full,
      alt: image.alternative_slugs.en,
      likes: image.likes,
      location: image.user.location,
      desc: image.alt_description,
    };
    setImgData(imgData);
    setCurrentImage(e.target);
    handleOpenModal(true);
  };
  return (
    <div className={css.container}>
      <img
        src={image.urls.small}
        alt={image.alternative_slugs.en}
        className={css.img}
        onClick={handle}
      />
    </div>
  );
};

export default ImageCard;
