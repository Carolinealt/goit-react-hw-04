import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import getImages from "./api/images-api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [imagesList, setImagesList] = useState([]);
  const [currentImage, setCurrentImage] = useState({});
  const [isLoasding, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgData, setImgData] = useState({});

  const handleBtnLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchImg = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getImages(query, page);
        setImagesList((prevAr) => page > 1 ? [...prevAr, ...data] : [...data])
      } catch (error) {
        setIsLoading(false);
        setError(true);
        toast("перезагрузи страницу");
      } finally {
        setIsLoading(false);
      }
    };
    fetchImg();
  }, [page, query, setIsLoading, setError]);

  const handleQuerry = (newQuery) => {
    setImagesList([]);
    setQuery(newQuery);
    setPage(1);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar func={handleQuerry} />
      {error && <ErrorMessage />}
      {imagesList.length > 0 && (
        <ImageGallery
          images={imagesList}
          setImgData={setImgData}
          setCurrentImage={setCurrentImage}
          handleOpenModal={handleOpenModal}
        />
      )}
      {imagesList.length > 0 && (
        <LoadMoreBtn handleBtnLoadMore={handleBtnLoadMore} />
      )}
      {isLoasding && <Loader />}
      <Toaster />
      {currentImage.src && (
        <ImageModal
          toOpen={handleOpenModal}
          isOpen={modalIsOpen}
          toClose={handleCloseModal}
          imageToShow={currentImage}
        />
      )}
    </>
  );
}

export default App;
