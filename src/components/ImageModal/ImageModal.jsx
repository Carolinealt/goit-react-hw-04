import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyle = { border: "4px red solid" };

const ImageModal = ({
  toOpen,
  isOpen,
  toClose,
  handleAfterOpenFunc,
  imageToShow: { src, alt },
}) => {
  return (
    <>
      <button onClick={toOpen}>open</button>
      <Modal
        isOpen={isOpen}
        shouldCloseOnEsc={true}
        style={customStyle}
        onAfterOpen={handleAfterOpenFunc}
      >
        <img src={src} alt={alt} />
        <button onClick={toClose}>close</button>
      </Modal>
    </>
  );
};

export default ImageModal;
