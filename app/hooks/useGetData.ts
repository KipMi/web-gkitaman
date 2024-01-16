import axios from "axios";
import { useQuery } from "react-query";
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async () => {
  const response = await axios.get(`${apiURL}/kegiatans`);
  return response.data;
};

const useGetData = () => {
  return useQuery("data", fetchData);
};

export default useGetData;
