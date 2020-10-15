import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../admin.css'; 

class DisplayUser extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get('http://localhost:5000/api/user').then(response => {
            this.setState({ users: response.data });
            console.log(response);
        });
    }

    render() {
       var id = 1;
        const items = this.state.users.map(user => {
            return (             
                
                <tbody align="right">
                  <tr>
                    <td>{id++}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.company_name}</td>
                    <td>{user.username}</td>
                    <td>{user.usertype}</td>                    
                  </tr>                  
                </tbody>
             )
        })

        return (
            <div> 
                <h3>USERS DATA</h3>  
                <table class="cinereousTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>COMPANY NAME</th>
                            <th>USER NAME</th>
                            <th>USER TYPE</th>                           
                        </tr>
                    </thead>
                    {items}
                </table>            
               
            </div>
        );
    }
}


export default DisplayUser;