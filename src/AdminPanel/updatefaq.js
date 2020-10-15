import React from "react";

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from '../AdminPanel/header';
import '../admin.css'; 

class UpdateFAQ extends React.Component {

    constructor(props) {
        super(props);  
        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onChangeAnswer = this.onChangeAnswer.bind(this);
        
     this.state = {
            company_name: " ",
            company_email: " "            
        }       

    this.onSubmit = this.onSubmit.bind(this);    
}

onChangeID(e) {
    this.setState({
        id: e.target.id
    })
}

onChangeQuestion(e) {
    this.setState({
        question: e.target.value
    })
}

onChangeAnswer(e) {
    this.setState({
        answer: e.target.value
    })
}

onSubmit(e) {
    e.preventDefault();
    const companyList = {
            question: this.state.question,
            answer: this.state.answer   
        }
        console.log(companyList);
        axios.put('http://localhost:5000/faqs/update/'+ this.props.match.params.id, companyList)
            .then(res => console.log(res.data));
    alert('Record UPDATED');
    window.location = "/admin/faqs";
    }

    componentDidMount() {
        axios.get('http://localhost:5000/faqs/' + this.props.match.params.id).then(response => {
            this.setState({
                question: response.data.question,
                answer: response.data.answer,
                });
            console.log(response);
        });
    }

    render() {
      
        return (
            <div className="ucompany"> 
                <AdminHeader />
                <h3>FAQ DATA UPDATE</h3><br/>
                <form method="post" className="utable" >

                    <table >
                    <thead text-align="center">                       
                        
                        <tr>                            
                            <th>Question</th>
                            <th><input type="text" className="form-control" value={this.state.question} onChange={this.onChangeQuestion}/>   <br /> </th>  
                                              </tr>
                        <tr>
                            <th>Answer</th>
                            <th><input type="text" className="form-control" value={this.state.answer} onChange={this.onChangeAnswer}/>    <br /> </th>
                        </tr>
                       
                        <tr >
                            <th className="utd">
                                <input type="submit"  value="UPDATE" onClick={this.onSubmit}/>
                                <a href={"/admin/faqs/"} >CANCEL</a>
                            </th>                              
                        </tr>
                    </thead>                    
                    </table>                  
                </form> 
            </div>
        );
    } 
}

export default UpdateFAQ;