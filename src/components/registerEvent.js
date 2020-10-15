import React, { useState, useEffect } from "react";
import decode from 'jwt-decode';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Row, Button, Col, Form } from "react-bootstrap";
import '../../src/App.css';
import Header from '../components/header';
import history from "./history";
import axios from 'axios';
import Img5 from "../../src/images/img5.jpg";
import people from "../../src/images/event.jpg";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class RegisterEvent extends React.Component {

  constructor() {
    super()
    this.state = {
      event: {},
      email: "",
      subject: "",
      desp:"",
      loc:"",
      time:"",
      show: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
   // this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

 // onChangeEmail(e) {
 //   this.setState({
 //     email: e.target.value
   // })
  //}

  handleShow() {
    this.setState({
      show: true
    })
  }

  handleClose() {
    this.setState({
      show: false
    })
  }
  componentDidMount() {
    const { handle } = this.props.location.state
    const colors = '#FFF7878';
    console.log("eventid", handle);
    axios.get(`https://protected-tundra-12534.herokuapp.com/api/events/${handle}`).then(response => {
      this.setState({ event: response.data });

      console.log("response", response);
      console.log(this.state.event.event_title);
      document.body.style.background = `url(${people})`;
    });
  }
  

  onSubmit(e) {
    let d =  decode(sessionStorage.getItem('token'));
    console.log(d.user1.username);

    e.preventDefault();
    const contactlist = {
      email: d.user1.username,
      subject: this.state.event.event_title,
      desp: this.state.event.event_desc,
      loc:this.state.event.event_location,
      time:this.state.event.event_date
    }
    console.log(contactlist)
    axios.post('https://protected-tundra-12534.herokuapp.com/send-email', contactlist)
      .then(res => console.log(res.data));
    alert("Registration done sucessfully!!")
    window.location = "/registerEvent";
  }

  render() {
    let d =  decode(sessionStorage.getItem('token'));
    console.log(d.user1.username);
    return (

      <>
        <Header />

        <div className="registerEvent">
          <div>
            <h1>{this.state.event.event_title} </h1>

          </div>
          <div className="row">
            <div className="column">
              <Image src={this.state.event.event_logo} />
            </div>
            <div className="column">

              <p>{this.state.event.event_desc}</p>
              <label>{this.state.event.event_time}</label><br />
              <label><b>{this.state.event.event_date}, {this.state.event.event_location}</b></label><br />
              <Button variant="primary text-center" onClick={this.handleShow}>Register</Button>
            </div>
          </div>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Register For {this.state.event.event_title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.onSubmit}>
                <Row>
                  <Col>
                    Enter Your Email Here:
                  </Col>
                  <Col sm={8}>
                    <Form.Control type="email" value={d.user1.username} />
                  </Col>
                </Row>
                <br />
                <Button variant="primary" type="submit" className="btns" >Submit</Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
            </Modal.Footer>
          </Modal>
        </div>

      </>
    );
  }
}

export default RegisterEvent;