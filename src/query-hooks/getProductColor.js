import axios from "axios";
import { useQuery } from "react-query";

const fetchProductColors = () =>
  axios
    .get("https://localhost:7216/api/ProductColors")
    .then((response) => response.data);

export default function useProductColors() {
  return useQuery("productColors", fetchProductColors);
}
