import React, { useState,useEffect } from "react";
import decode from 'jwt-decode';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../src/App.css';
import Header from '../components/header';
import history from "./history";
import axios from 'axios';
import Footer from "./footer";

const AboutUs = props =>  {

  const [datas, setDatas] = useState([]);

  

  
    const colors = {
        Sea: '#FFFFFF',
       
      }
      const [color, setColor] = useState(colors.Sea)
      useEffect(
       
        () => {
          const fetchData = async () => {
            const response = await axios.get('https://protected-tundra-12534.herokuapp.com/api/aboutUs')
            setDatas(response.data);
          }
          fetchData();
          document.body.style.background = color
        },
        [color],
        []
      )  
      
       console.log(datas.map(data=>data.heading1));
      
    return(
       
        <>
         <Header />
         
        <div className="jumbotron text-center">
  <h1>{datas.map(data=>data.heading1)}</h1> 
  <p>{datas.map(data=>data.desc1)}</p> 
</div>
<div className="container-fluid">
  <div className="row">
    <div className="col-sm-8">
      <h2>{datas.map(data=>data.heading2)}</h2>
      <p>{datas.map(data=>data.desc2)}</p>
      <button className="btn btn-primary btn-lg text-center">Get in Touch</button>
    </div>
    <div className="col-sm-4">
      <span className="logo1"></span>
    </div>
  </div>
</div>

<div className="container-fluid bg-grey">
  <div className="row">
    <div className="col-sm-4">
      <span className="logo"></span>
    </div>
    <div className="col-sm-8">
      <h2>{datas.map(data=>data.heading3)}</h2>     
      <p>{datas.map(data=>data.desc3)}</p>
     
    </div>
  </div>
</div>
<Footer />
         </>
            );
}

export default AboutUs;