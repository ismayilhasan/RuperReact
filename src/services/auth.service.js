import axios from "axios";

const API_URL = "https://localhost:7216";

const register = (username, email, password) => {
  return axios.post(API_URL + "/register", {
    username,
    email,
    password,
  });
};

const login = (loginData) => {
  return axios.post(API_URL + "/login", loginData).then((response) => {
    if (response.data.token) {
        console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const isLoggedIn = () => {
  return getCurrentUser() != null ? true : false;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  isLoggedIn,
};

export default AuthService;
