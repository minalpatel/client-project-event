import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

const AdminLogin = props => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    errormsg: ''
  });
  const colors = {
    Sea: '#FFFFFF',
   
  }
  const [color, setColor] = useState(colors.Sea)
  useEffect(
    () => {
      document.body.style.background = color
    },
    [color]
  ) 
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
      .post('https://protected-tundra-12534.herokuapp.com/api/user/login', data)
      .then(response => {       
            window.location = "/admin/user";
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
      
      <div className="main-agile">
        <div className="content">
          <div className="top-grids">
          <span className='error'>{formData.errormsg}</span>
          <div className="signin-form">
            <h2>ADMIN LOGIN PANEL</h2>

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
              <input type="submit" value="LOGIN IN" />
            </form>
            
          </div>
        </div>
      </div>
      </div> 
    </Router >
    );
  }

export default AdminLogin;
