import React from "react";
import { Image, Form, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';

class Contactus extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangecontact_no = this.onChangecontact_no.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeProvince = this.onChangeProvince.bind(this);
        this.onChangePostal = this.onChangePostal.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            company_name: "",
            company_email: "",
            website: "",
            contact_no: "",
            address:"",
            province: "",
            postal: ""
        }


    }

    onChangeName(e) {
        this.setState({
            company_name: e.target.value
        })
    }

    onChangeWebsite(e) {
        this.setState({
            company_website: e.target.value
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

    onChangePostal(e) {
        this.setState({
            postal: e.target.value
        })
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const companyList = {

            company_name: this.state.company_name,
            company_email: this.state.email,
            website: this.state.company_website,
            contact_no: this.state.contact_no,
            province: this.state.province,
            postal: this.state.postal,
            address: this.state.address
            

        }
        console.log(companyList)
        axios.post('http://localhost:5000/api/company', companyList)
            .then(res => console.log(res.data));
       alert('Record Saved');
       window.location = "/admin/company";
    }

    render() {
    return (
        <>
            <div className="container-fluid text-center">
              
                <h1>Add New Company</h1>
                <div className="mx-auto">
                    <div className="container">
                        <Form onSubmit={this.onSubmit}>
                            <div>
                                <Row className="form-group row">
                                    <Col sm="12">
                                        <input type="text"
                                        className="form-control" placeholder="Company Name"
                                        value={this.state.company_name}
                                        onChange={this.onChangeName}
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
                                            className="form-control" placeholder="Website Details"
                                            value={this.state.company_website}
                                            onChange={this.onChangeWebsite}
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
                                    <input type="text"
                                            className="form-control" placeholder="Address Details"
                                            value={this.state.address}
                                            onChange={this.onChangeAddress}
                                        />
                                    </Col>
                                </Row>
                             <Row className="form-group row">
                                    <Col sm="12">
                                    <input type="text"
                                            className="form-control" placeholder="Postal Code"
                                            value={this.state.postal}
                                            onChange={this.onChangePostal}
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