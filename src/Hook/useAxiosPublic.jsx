import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_LOCALHOST_API_URL
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
