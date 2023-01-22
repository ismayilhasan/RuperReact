import axios from "axios";
import { useQuery } from "react-query";

const fetchBrands = () =>
  axios
    .get("https://localhost:7216/api/Brands")
    .then((response) => response.data);

export default function useBrands() {
  return useQuery("brands", fetchBrands); 
}
