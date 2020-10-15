import React from "react";
import Img from "../../images/Logo.png";
import { Image, Form, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';

class Contactus extends React.Component {

    constructor(props) {
        super(props);


        this.onChangeFName = this.onChangeFName.bind(this);
        this.onChangeLName = this.onChangeLName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangecontact_no = this.onChangecontact_no.bind(this);
        this.onChangeProvince = this.onChangeProvince.bind(this);
        this.onChangeReason = this.onChangeReason.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            contact_no: "",
            province: "",
            reason: ""

        }


    }

    onChangeFName(e) {
        this.setState({
            fname: e.target.value
        })
    }

    onChangeLName(e) {
        this.setState({
            lname: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangecontact_no(e) {
        this.setState({
            contact_no: e.target.value
        })
    }

    onChangeProvince(e) {
        this.setState({
            province: e.target.value
        })
    }

    onChangeReason(e) {
        this.setState({
            reason: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const contactlist = {

            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            contact_no: this.state.contact_no,
            province: this.state.province,
            reason: this.state.reason
            

        }
        console.log(contactlist)
        axios.post('https://protected-tundra-12534.herokuapp.com/api/contact', contactlist)
            .then(res => console.log(res.data));
       alert('send');
    }

    render() {
    return (
        <>
            <div className="container-fluid text-center">
                <Image src={Img} width='100px' height='140px' />
                <h1>Contact Us</h1>
                <div class="mx-auto">
                    <div class="container">
                        <Form onSubmit={this.onSubmit}>
                            <div >
                                <Row className="form-group row">
                                    <Col>
                                    <input type="text"
                               className="form-control" placeholder="First Name"
                               value={this.state.fname}
                               onChange={this.onChangeFName}
                        />
                                    </Col>
                                    <Col>
                                    <input type="text"
                               className="form-control" placeholder="Last Name"
                               value={this.state.lname}
                               onChange={this.onChangeLName}
                        />
                                    </Col>
                                </Row>
                                <Row className="form-group row">

                                    <Col sm="12">
                                    <input type="text"
                               className="form-control" placeholder="E-mail"
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                        />
                                    </Col>
                                </Row>
                                <Row className="form-group row">

                                    <Col sm="12">
                                    <input type="text"
                               className="form-control" placeholder="Phone Number"
                               value={this.state.contact_no}
                               onChange={this.onChangecontact_no}
                        />
                                    </Col>
                                </Row>
                                <Row className="form-group row">
                                <Col sm="12">
                                <Form.Control as="select" value={this.state.province} onChange={this.onChangeProvince}>
                                <option>Please Select Province</option>
                <option>Alberta</option>
                <option>British Columbia</option>
                <option>Manitoba</option>
                <option>Newfoundland and Labrador</option>
                <option>New Brunswick</option>
                <option>Nova Scotia</option>
                <option>Ontario</option>
                <option>Prince Edward Island</option>             
                <option>Quebec</option>               
                <option>Saskatchewan</option>
      </Form.Control>
                                </Col>
                            </Row>
                            <Row className="form-group row">
                                <Col sm="12">
                            <Form.Control as="textarea" placeholder="Describe your problem.....!!" rows="3" value={this.state.reason} onChange={this.onChangeReason} />
                            </Col>
                            </Row>
                            <Button variant="primary" type="submit">
    Submit
  </Button>
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