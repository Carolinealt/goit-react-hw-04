import { createContext, useState } from "react";

export const imageContext = createContext();

const ImageContextProvider = ({ children }) => {
  const [imgData, setImgData] = useState({});

  return (
    <imageContext.Provider
      value={{ imgData, changeImgData: setImgData}}
    >
      {children}
    </imageContext.Provider>
  );
};
export default ImageContextProvider;
