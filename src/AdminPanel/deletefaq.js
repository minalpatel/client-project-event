import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../admin.css'; 

class DeleteFAQ extends React.Component {

    constructor(props) {
        super(props);  
               
     this.state = {
            question: " ",
            answer: " ",            
        }   
}
    componentDidMount() {
        axios.delete('http://localhost:5000/faqs/' + this.props.match.params.id);
        alert('Record Deleted');
        window.location = "/admin/faqs"; 
    }

    render() {
      
        return (
            <div> 
               
            </div>
        );
    } 
}

export default DeleteFAQ;