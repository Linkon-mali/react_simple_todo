import React, {useState, useEffect} from 'react'
import {InputGroup, Button, FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const TodoCreate = ({onCreateTodo}) => {

    const [title, setTitle] = useState('');

    const createTodo = () => {
        if(title.length > 0 ){
          const todo = {
            title,
            status : 'Pending'
      }
            onCreateTodo(todo);
        }
        setTitle('')
    }

  const [score, setScore] = useState(title.length)
  
    useEffect(() => {
      document.title = 'Current Score ' + title.length;
      console.log('render');
    }, [])

  return (
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter Todo"
      aria-label="todo"
      aria-describedby="basic-addon2"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <Button variant="info" id="button-addon2" onClick={() => createTodo()}>
      <FontAwesomeIcon icon={faPlusCircle} /> New
    </Button>
    </InputGroup>
  )
}

export default TodoCreate