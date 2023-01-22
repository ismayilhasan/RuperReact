import axios from "axios";
import { useQuery } from "react-query";

const fetchsubCategoires = () =>
  axios
    .get("https://localhost:7216/api/SubCategories")
    .then((response) => response.data);

export default function useSubCategoires() {
  return useQuery("subcategoires", fetchsubCategoires);
}
