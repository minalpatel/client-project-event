import React, { useState }  from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import history from "./history";
import Header from './loginheader';

const RegisterBox = props => {

  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    companyname:'',
    username: '',
    password: '',
    usertype:'',
    errormsg: '',
    successmsg: ''
  });

  
  
    

  const {firstname,lastname,companyname, username , password,usertype } = formData;
  

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
        first_name: firstname,
        last_name: lastname,
        company_name: companyname,
        username: username,
        password: password,
        usertype: "user"
      };
      console.log(data);
      axios
      .post('https://protected-tundra-12534.herokuapp.com/api/user', data, config)
      .then(response => {
        setFormData({
          ...formData,
          successmsg: "You have been successfully registered. Please Login!!"
        });
        return history.push("/");
    
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
  <span className='success'>{formData.successmsg}</span>
      <div className="signin-form signup-form">
        
         <h2> SIGN UP</h2>
         <form onSubmit={e => onSubmit(e)}>
       
         <input
              type="text"
              name="firstname"
              placeholder="Enter First Name"
              onChange={e => onChange(e)}/>
         

            <input
              type="text"
              name="lastname"
              placeholder="Enter Last Name"
              onChange={e => onChange(e)}/>

            <input
              type="text"
              name="companyname"
              placeholder="Enter Company Name"
              onChange={e => onChange(e)}/>
           
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={e => onChange(e)}/>
            <small className="danger-error"></small>
         

          

          
            
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Enter Password"
              onChange={e => onChange(e)}/>




            

            <input type="checkbox" id="brand1" value=""/>
							<label><span></span>I accept the terms of use</label>

          <input type="submit" value="Register"/>
        </form>
        </div>
        </div>
        </div>
        </div>
        </Router>

    );

  }


  
  export default RegisterBox;

 