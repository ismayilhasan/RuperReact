import axios from "axios";
import { useQuery } from "react-query";

const fetchColors = () =>
  axios
    .get("https://localhost:7216/api/Colors")
    .then((response) => response.data);

export default function useColors() {
  return useQuery("colors", fetchColors);
}
