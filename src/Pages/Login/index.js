import axios from "axios";
import React, { useEffect } from "react";
import AuthService from "../../services/auth.service";
import { Link, useHistory } from "react-router-dom";
import { useAppContext } from "../../context/App";
import "./style.scss";

function Login() {
  const { push } = useHistory();
  const [{ user, setUser, setHeaderUsername }] = useAppContext();

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    if (AuthService.isLoggedIn()) push("/");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { Username, Password } = user;
    const loginData = { Username, Password, Email: Username };
    localStorage.setItem("headerUsername",Username)
   
    AuthService.login(loginData).then(() => {
      push("/");
      
    });

    // bu kodu login isteyen bir endpoint ucun istifade ede bilersne
    // axios
    //   .post("https://localhost:7216/api/Products", {
    //     headers: {
    //       "Authorization" : `Bearer {token_bura}`
    //     }
    //   })
    //   .then((res) => {

    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     console.error(err.response);
    //   });

    setHeaderUsername(Username);
  };

  return (
    <>
      <div className="login-heading">
        <div className="container">
          <h1 className="shop-title-heading">Login</h1>
        </div>
      </div>

      <section id="LoginSection">
        <div className="box-form-login">
          <h2>
            <i className="fa-solid fa-user"></i>Login
          </h2>
          <div className="box-content">
            <div className="form-login">
              <form onSubmit={handleSubmit} className="login">
                <div className="username">
                  <label>
                    Username or email address{" "}
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="input-text"
                    name="Username"
                    id="username"
                    onChange={handleRegisterChange}
                  />
                </div>
                <div className="password">
                  <label for="password">
                    Password <span className="required">*</span>
                  </label>
                  <input
                    onChange={handleRegisterChange}
                    className="input-text"
                    type="password"
                    name="Password"
                  />
                </div>
                <div className="rememberme-lost">
                  <div className="remember-me">
                    <input
                      className="checkbox-input"
                      name="rememberme"
                      type="checkbox"
                      value="forever"
                    />
                    <label className="inline">Remember me</label>
                  </div>
                  <div className="lost-password">
                    <a href="page-forgot-password.html">Lost your password?</a>
                  </div>
                </div>
                <div className="button-login">
                  <button className="button" type="submit">
                    Login
                  </button>
                </div>
              </form>
              <p class="text-center mt-4">
                Don't have an account?{" "}
                <Link to="/register" className="sign-up">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
