import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/photos";
const client_id = "xnfkothUKsy5wzeJa1mebXkhzk1lY1gv-5p3ydjEDCc";

const getImages = async (query, page) => {
  const dataS = await axios.get("/?", {
    params: { client_id, query, page },
  });
  const { data } = dataS;
  return data;
};

export default getImages;
