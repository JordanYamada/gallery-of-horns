import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Horns.css';

class Horns extends React.Component{
  render () {
    return(
      <Form onSubmit={this.props.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>How many horns would you like?</Form.Label>
        <Form.Select aria-label="Default select example" onChange={this.props.handleSelect}>
      <option>Choose number of horns</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="100">Hundred</option>
      <option value="all">All</option>
    </Form.Select>
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
}


export default Horns;