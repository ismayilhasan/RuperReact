import axios from "axios";
import { useQuery } from "react-query";

const fetchCategoires = () =>
  axios
    .get("https://localhost:7216/api/Categories")
    .then((response) => response.data);

export default function useCategories() {
  return useQuery("categories", fetchCategoires);
}
