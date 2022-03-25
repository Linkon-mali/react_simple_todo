import React, {useState} from 'react'
import {Card, ListGroup, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, FaTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import TodoCreate from './TodoCreate';
import TodoEmpty from './TodoEmpty';
import TodoEdit from './TodoEdit';

const TodoList = () => {

    const [todoEditing, setTodoEditing] = useState(null);
    // console.log(todoEditing);

    const [todos, setTodos] = useState([
        {
            'title': 'First Todo',
            'status': 'Pending'
        },
        {
            'title': 'Second Todo',
            'status': 'Pending'
        },
        {
            'title': 'Third Todo',
            'status': 'Done'
        }
    ]);

    const addTodo = (todo) => {
        console.log(todo);
        let newTodos = todos.slice(); // here todos array clone newTodos array
        newTodos.unshift(todo);
        console.log(newTodos)
        setTodos(newTodos);

    }

    const deleteTodo = (index) => {
        console.log(index);
        let newTodos = todos.slice(); // here todos array clone newTodos array
        newTodos.splice(index, 1);
        setTodos(newTodos);

    }

    const updateTodo = ({ index, todo }) => {
        let newTodos = todos.slice();
        newTodos[index] = todo;
        setTodos(newTodos);
        setTodoEditing(null);
    }
    
  return (
    <Card>
        <Card.Body>
            <Card.Title className='text-center todo-title'>
                My Todos
            </Card.Title>

            <TodoCreate onCreateTodo={todo => addTodo(todo)} />
            {
                todos.length === 0 && <TodoEmpty />
            }

            <ListGroup >
            {
                    todos.map((todo, index) => (
                        <ListGroup.Item key={index} variant={todo.status === 'Pending' ? 'info' : 'warning'}>
                            <div className='float-start'>
                                
                                {
                                    (todoEditing === index) ?
                                    <TodoEdit
                                        index={index}
                                        todo={todo}
                                        onUpdateTodo={value => updateTodo(value)}
                                    />
                                    :
                                    <>
                                        {todo.status === 'Pending' && todo.title}
                                        {todo.status === 'Done' && <del>{todo.title}</del>}
                                    </>
                                }
                            </div>
                            <div className='float-end'>
                                <Button variant="outline-success" onClick={() => setTodoEditing(index)} className='ms-2'>
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                                <Button variant="outline-danger" onClick={ () => deleteTodo(index)} className='ms-2'>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </div>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Card.Body>
    </Card>
  )
}

export default TodoList