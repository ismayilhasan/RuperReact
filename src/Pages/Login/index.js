import React from "react";
import "./style.scss";

function Login() {
  return (
    <>
      <div className="login-heading">
        <div className="container">
          <h1 className="shop-title-heading">Login</h1>
        </div>
      </div>

      <section id="LoginSection">
        <div class="box-form-login">
          <h2><i class="fa-solid fa-user"></i>Login</h2>
          <div class="box-content">
            <div class="form-login">
              <form method="post" class="login">
                <div class="username">
                  <label>
                    Username or email address <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    class="input-text"
                    name="username"
                    id="username"
                  />
                </div>
                <div class="password">
                  <label for="password">
                    Password <span class="required">*</span>
                  </label>
                  <input class="input-text" type="password" name="password" />
                </div>
                <div class="rememberme-lost">
                  <div class="remember-me">
                    <input className="checkbox-input" name="rememberme" type="checkbox" value="forever" />
                    <label class="inline">Remember me</label>
                  </div>
                  <div class="lost-password">
                    <a href="page-forgot-password.html">Lost your password?</a>
                  </div>
                </div>
                <div class="button-login">
                  <input
                    type="submit"
                    class="button"
                    name="login"
                    value="Login"
                  />
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
