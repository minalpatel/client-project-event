import React from "react";

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from '../AdminPanel/header';
import '../admin.css'; 

class DeleteCompany extends React.Component {

    constructor(props) {
        super(props);  
               
     this.state = {
            question: " ",
            answer: " "           
        }   
}

    componentDidMount() {
        axios.delete('http://localhost:5000/api/company/' + this.props.match.params.id);
        alert('Record Deleted');
        window.location = "/admin/company"; 
    }

    render() {
      
        return (
            <div> 
               
            </div>
        );
    } 
}


export default DeleteCompany;