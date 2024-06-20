import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyle = { border: "4px red solid" };

const ImageModal = ({
  toOpen,
  isOpen,
  toClose,
  handleAfterOpenFunc,
  imageToShow,
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
        {/* <img src="" alt="" srcset="" /> */}
        <button onClick={toClose}>close</button>
      </Modal>
    </>
  );
};

export default ImageModal;
