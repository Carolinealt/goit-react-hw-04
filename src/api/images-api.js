import axios from "axios";
const client_id = "xnfkothUKsy5wzeJa1mebXkhzk1lY1gv-5p3ydjEDCc";
axios.defaults.baseURL = `https://api.unsplash.com/search/photos`;
axios.defaults.headers.common.Authorization = `Client-ID ${client_id}`;

const getImages = async (query, page) => {
  if (query === "") {
    query = "animals";
  }
  const dataS = await axios.get(`?`, {
    params: { query, page },
  });

  const {
    data: { results },
  } = dataS;
  return results;
};

export default getImages;
