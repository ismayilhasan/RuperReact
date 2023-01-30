import axios from "axios";
import { useQuery } from "react-query";

const fetchProducts = () =>
  axios
    .get("https://localhost:7216/api/Products")
    .then((response) => response.data);

export default function useProducts() {
  return useQuery("products", fetchProducts);
}
