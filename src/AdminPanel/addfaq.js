import React from "react";
import { Image, Form, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';

class Contactus extends React.Component {

    constructor(props) {
        super(props);
        this.onchangequestion = this.onchangequestion.bind(this);
        this.onchangeanswer = this.onchangeanswer.bind(this);
       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            question: "",
            answer: "",           
        }
    }

    onchangequestion(e) {
        this.setState({
            question: e.target.value
        })
    }

    onchangeanswer(e) {
        this.setState({
            answer: e.target.value
        })
    }

    
    onSubmit(e) {
        e.preventDefault();
        const faqList = {
            question: this.state.question,
            answer: this.state.answer   
        }
        console.log(faqList)
        axios.post('http://localhost:5000/faqs/addfaq', faqList)
            .then(res => console.log(res.data));
       alert('Record Saved');
       window.location = "/admin/faqs";
    }

    render() {
    return (
        <>
            <div className="container-fluid text-center">
              
                <h1>Add New FAQ</h1>
                <div className="mx-auto">
                    <div className="container">
                        <Form onSubmit={this.onSubmit}>
                            <div>
                                <Row className="form-group row">
                                    <Col sm="12">
                                        <input type="text"
                                        className="form-control" placeholder="Question Details"
                                        value={this.state.question}
                                        onChange={this.onchangequestion}
                                     />
                                    </Col>
                                </Row>
                               
                                <Row className="form-group row">
                                    <Col sm="12">
                                    <input type="text"
                                            className="form-control" placeholder="Answer Details"
                                            value={this.state.answer}
                                            onChange={this.onchangeanswer}
                                        />
                                    </Col>
                                </Row>   
                            <Button variant="primary" type="submit">    Save  </Button>
                        </div>
                        </Form>
                </div>
            </div>
        </div>
 
    </>
            );
    }

}

export default Contactus;