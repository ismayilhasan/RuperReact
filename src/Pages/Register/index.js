import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../../context/App';
import './style.scss'
function Register() {
  const [{user,setUser}] = useAppContext();
  const { push } = useHistory();


  
  const handleRegisterChange = (e) => {
    const {name,value} = e.target
    setUser({...user,[name]:value})
  }
  

  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://localhost:7216/register", user)
      .then(() => push("/login"))
      .catch((err) => {
        console.error(err)
        console.error(err.response)
      });
  };
  return (
    <>
      <div className="login-heading">
        <div className="container">
          <h1 className="shop-title-heading">Register</h1>
        </div>
      </div>

      <section id="LoginSection">
        <div className="box-form-login">
          <h2><i className="fa-solid fa-user"></i>Register</h2>
          <div className="box-content">
            <div className="form-login">
              <form onSubmit={handleSubmit} className="login">
              <div className="firstname">
                  <label>
                    Firstname <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="input-text"
                    name="FirstName"
                    id="firstName"
                    onChange={handleRegisterChange}
                  />
                </div>
                          
                <div className="last-name">
                  <label>
                    lastName <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="input-text"
                    name="LastName"
                    id="lastName"
                    onChange={handleRegisterChange}
                  />
                </div>

                <div className="username">
                  <label>
                    Username <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="input-text"
                    name="Username"
                    id="username"
                    onChange={handleRegisterChange}
                  />
                </div>

                <div className="email">
                  <label>
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="input-text"
                    name="Email"
                    id="lastName"
                    onChange={handleRegisterChange}
                  />
                </div>
                <div className="password">
                  <label for="password">
                    Password <span className="required">*</span>
                  </label>
                  <input onChange={handleRegisterChange} className="input-text" type="password" name="Password" />
                </div>
               
                
            
                <div className="button-login">
                  <button className="button" type='submit'>Register</button>
              
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register