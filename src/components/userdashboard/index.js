import React, { Component } from "react";
import Img from "../../images/event-manage.jpg";
import Col from "react-bootstrap/Col";
import { Image, Row, Card, CardDeck } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import axios from 'axios';

class UserDashBoard extends React.Component {
    state = {
        events: []
    };

    componentDidMount() {
        axios.get('https://protected-tundra-12534.herokuapp.com/api/events').then(response => {
            this.setState({ events: response.data });
            console.log(response);
        });
    }

    render() {
        const items = this.state.events.map(event => {
            return (
                <CardDeck style={{ width: '20rem', padding: '0.2rem', display: 'inline-block', textAlign: 'center', marginLeft: '22px' }}>
                    <Card>
                        <Card.Img variant="top" src={event.event_logo} width="304" height="236" />
                        <Card.Body>
                            <Card.Text>
                            <Link to={{pathname: '/registerEvent',state: { handle: event._id }}}>
                                    <span> {event.event_title} </span>
                                    <b> {event.event_date} </b>
                                    <i> {event.event_location} </i>
                                </Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

            )
        })

        return (
            <div>
                <div>
                    <Image src={Img} width='100%' />
                </div>
                {items}
            </div>
        );
    }
}


export default UserDashBoard;