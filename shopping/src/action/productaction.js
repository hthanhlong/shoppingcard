import axios from "axios";

const fetchData = async () => {
  const res = await axios.get("http://localhost:8000/api/product/");
  return {
    type: "GET_DATA",
    payload: res.data,
  };
};

export default fetchData;
