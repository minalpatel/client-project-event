import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../admin.css'; 

class DisplayContact extends React.Component {
    state = {
        contacts: []
    };

    componentDidMount() {
        axios.get('http://localhost:5000/api/contact').then(response => {
            this.setState({ contacts: response.data });
            console.log(response);
        });
    }

    render() {
       var id = 1;
        const items = this.state.contacts.map(contact => {
            return (             
                
                <tbody align="right">
                  <tr>
                    <td>{id++}</td>
                    <td>{contact.fname}</td>
                    <td>{contact.lname}</td>
                    <td>{contact.email}</td>
                    <td>{contact.contact_no}</td>
                    <td>{contact.province}</td>      
                    <td>{contact.reason}</td>               
                  </tr>                  
                </tbody>
             )
        })

        return (
            <div>   
                <h3>Contacted Users DATA</h3> 
                <table class="cinereousTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>EMAIL</th>
                            <th>CONTACT NO</th>
                            <th>PROVINCE</th>
                            <th>REASON FOR CONTACTING</th>                           
                        </tr>
                    </thead>
                    {items}
                </table>            
               
            </div>
        );
    }
}


export default DisplayContact;