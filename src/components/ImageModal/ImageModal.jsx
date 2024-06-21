import Modal from "react-modal";
import css from "./ImageModal.module.css";
Modal.setAppElement("#root");

const ImageModal = ({
  isOpen,
  toClose,
  handleAfterOpenFunc,
  imageToShow: { src, alt, location, desc, likes },
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        shouldCloseOnEsc={true}
        className={css.modal}
        overlayClassName={css.overlay}
        onAfterOpen={handleAfterOpenFunc}
      >
        <img className={css.fullImg} src={src} alt={alt} />
        <div className={css.desc}>
          <p className={css.par}>location - {location}</p>
          <p className={css.par}>description - {desc}</p>
          <p className={css.par}>likes - {likes}</p>
        </div>

        <button onClick={toClose} className={css.closeBtn}>
          x
        </button>
      </Modal>
    </>
  );
};

export default ImageModal;
