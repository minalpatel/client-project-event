import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../admin.css'; 

class DisplayFAQ extends React.Component {
    state = {
        faqs: []
    };

    componentDidMount() {
        axios.get('http://localhost:5000/faqs').then(response => {
            this.setState({ faqs: response.data });
            console.log(response);
        });
    }
   
    render() {
       var id = 1;
        const items = this.state.faqs.map(faq => {
            return (             
                
                <tbody>
                  <tr>
                    <td  align="right">{id++}</td>
                    <td  align="right">{faq.question}</td>
                    <td  align="right">{faq.answer}</td>                    
                    <td>                     
                        <input type="text" id="ids" name="ids" value={faq._id} hidden/>   
                        <a href={"/admin/faqs/update/"+ faq._id} >UPDATE</a>
                        <a href={"/admin/faqs/delete/"+ faq._id}>DELETE</a> 
                         

                    </td>              
                  </tr>                  
                </tbody>
             )
        })

        return (
            <div> 
                <h3>All FAQs DATA</h3>  
                <form method="POST">
                <table className="cinereousTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>QUESTION</th>
                            <th>ANSWER</th>    
                            <th>MANIPULATIONS</th>                                           
                        </tr>
                    </thead>
                    {items}
                </table> 
                </form><br/><br/>   
               <a href = "/admin/newfaq" >ADD A NEW FAQ</a>
            </div>
        );
    }
}


export default DisplayFAQ;