import axios from "axios";
import React from "react";
import { useAppContext } from "../../context/App";
import "./style.scss";

function Login() {
  const [{user,setUser}] = useAppContext();

  const handleRegisterChange = (e) => {
    const {name,value} = e.target
    setUser({...user,[name]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://localhost:7216/register", user)
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err)
        console.error(err.response)
      });
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
          <h2><i className="fa-solid fa-user"></i>Login</h2>
          <div className="box-content">
            <div className="form-login">
              <form  onSubmit={handleSubmit} className="login">
                <div className="username">
                  <label>
                    Username or email address <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="input-text"
                    name="username"
                    id="username"
                    onChange={handleRegisterChange}
                  />
                </div>
                <div className="password">
                  <label for="password">
                    Password <span className="required">*</span>
                  </label>
                  <input  onChange={handleRegisterChange} className="input-text" type="password" name="password" />
                </div>
                <div className="rememberme-lost">
                  <div className="remember-me">
                    <input className="checkbox-input" name="rememberme" type="checkbox" value="forever" />
                    <label className="inline">Remember me</label>
                  </div>
                  <div className="lost-password">
                    <a href="page-forgot-password.html">Lost your password?</a>
                  </div>
                </div>
                <div className="button-login">
                <button className="button" type='submit'>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
