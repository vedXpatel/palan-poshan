import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import './appointments.css'

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b className="add-todo">Add Appointment</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new appointment" />
    </Form.Group>
    <Button variant="primary mb-3" type="submit" className="appt-btn">
      Submit
    </Button>
  </Form>
  );
}

export default FormTodo