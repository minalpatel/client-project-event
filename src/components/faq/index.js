import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class FAQ extends React.Component{
    state = {
        tasks: []
      };

      componentDidMount() {
        axios.get('https://protected-tundra-12534.herokuapp.com/faqs').then(response => {
          this.setState({ tasks: response.data });
          console.log(response);
        });

      }
      render() {
        return (
          <div>
            {this.state.tasks.map(task => (
              <Task task={task} key={task._id} />
            ))}
          </div>
        );
      }
    }
    const Task = props => {
      return (
        <div className="center">
          <Accordion>
          <Col sm={10} md={10} lg={10} xl={10}>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      {props.task.question}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body> 
          <ul>
          <li> {props.task.answer}  </li>
      
         </ul>
         </Card.Body>
    </Accordion.Collapse>
  </Card> 
  </Col>
</Accordion>
        </div>
      );
    };

export default FAQ;