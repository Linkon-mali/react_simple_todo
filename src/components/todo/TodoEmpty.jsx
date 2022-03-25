import React, {useState} from 'react'
import {InputGroup, Button, FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faInfoCircle, faPlusCircle, FaTimes, faTrash } from '@fortawesome/free-solid-svg-icons'


const TodoEmpty = () => {
  return (
    <p className='bg-warning p-3'>
        <FontAwesomeIcon icon={faInfoCircle} />
        &nbsp; &nbsp;
        Sorry, No todo found, Please create one.
    </p>
  )
}

export default TodoEmpty