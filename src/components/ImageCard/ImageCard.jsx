import css from "./ImageCard.module.css";

const ImageCard = ({ src, alt }) => {
  return (
    <div className={css.container}>
      <img src={src} alt={alt} className={css.img} />
    </div>
  );
};

export default ImageCard;
