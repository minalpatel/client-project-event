import React, { useState } from "react";
import decode from 'jwt-decode';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../src/login.scss';
import history from "./history";
import axios from 'axios';
import Header from './loginheader';

const LoginBox = props => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    errormsg: ''
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    let data = {
      username: username,
      password: password
    };

    axios
      .post('https://protected-tundra-12534.herokuapp.com/api/user/login', data, config)
      .then(response => {
        let decodeddata = decode(response.data.token);
        console.log(decodeddata);
        sessionStorage.setItem('token', response.data.token);
     //   let d =  decode(sessionStorage.getItem('token'));
     //   console.log(d.user1.username);
        return history.push("/home");
      })
      .catch(error => {
        console.log(error.response.data.errors[0].msg);
        setFormData({
          ...formData,
          errormsg: error.response.data.errors[0].msg
        });
      });
  };


  return (
    <Router>
      <Header />
      <div className="main-agile">

        <div className="content">
          <div className="top-grids">
          <span className='error'>{formData.errormsg}</span>
          <div className="signin-form">
            <h2>Login</h2>

            <form onSubmit={e => onSubmit(e)}>
              <input
                type="text"
                name="username"
                placeholder="User Name"
                value={username}
                required="" onChange={e => onChange(e)}
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                required="" onChange={e => onChange(e)}
              />

              <input type="checkbox" id="brand" value="" />
              <label className="brand">
                <span></span> Remember me ?
          </label>
              <input type="submit" value="SIGN IN" />
            </form>
            <div className="signin-agileits-bottom">
              <p>
                Haven't yet registered??
              <Link
                  to="/Register"
                  className="nav-link"
                  onClick={() => history.push("/Register")}
                >

                  Register
              </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div> 
    </Router >
    );
  }

export default LoginBox;
