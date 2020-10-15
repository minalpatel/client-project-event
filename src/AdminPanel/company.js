import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../admin.css'; 

class DisplayCompany extends React.Component {
    state = {
        companies: []
    };

    componentDidMount() {
        axios.get('http://localhost:5000/api/company').then(response => {
            this.setState({ companies: response.data });
            console.log(response);
        });
    }

    render() {
       var id = 1;
        const items = this.state.companies.map(company => {
            return (             
                
                <tbody>
                  <tr>
                    <td  align="right">{id++}</td>
                    <td  align="right">{company.company_name}</td>
                    <td  align="right">{company.company_email}</td>
                    <td  align="right">{company.website}</td>
                    <td  align="right">{company.contact_no}</td>
                    <td  align="right">{company.address}</td>     
                    <td  align="right">{company.province}</td>     
                    <td  align="right">{company.postal}</td>                    
                    <td>                     
                        <input type="text" id="ids" name="ids" value={company._id} hidden/>   
                        <a href={"/admin/company/update/"+ company._id} >UPDATE</a>
                        <a href={"/admin/company/delete/"+ company._id}>DELETE</a>       
                    </td>              
                  </tr>                  
                </tbody>
             )
        })

        return (
            <div> 
                <h3>COMPANY DATA</h3>  
                <form method="POST">
                <table class="cinereousTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>COMPANY NAME</th>
                            <th>COMPANY EMAIL</th>
                            <th>WEBSITE</th>
                            <th>CONTACT NUMBER</th>
                            <th>ADDRESS</th> 
                            <th>PROVINCE</th>    
                            <th>POSTAL</th> 
                            <th>MANIPULATIONS</th>                     
                        </tr>
                    </thead>
                    {items}
                </table> 
                </form><br/><br/>   
               <a href = "/admin/newcompany" >ADD A NEW COMPANY</a>
            </div>
        );
    }
}


export default DisplayCompany;