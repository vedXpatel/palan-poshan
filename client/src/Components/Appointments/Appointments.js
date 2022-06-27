import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Todo'
import FormTodo from './FormTodo'
import './appointments.css'
import Navbar from '../Navbar/Navbar'


function Appointments() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
      <div className="appt-bg">
        <Navbar/>
        <div className="appt-heading">APPOINTMENTS</div>
        <div className="appt-content">
        <FormTodo addTodo={addTodo} />
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default Appointments