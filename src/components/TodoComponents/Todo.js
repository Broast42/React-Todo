import React from 'react';
import './Todo.css';

const Todo = props =>{
    return(
        <div className={`${props.toDos.completed ? "complete": ""}`}
        onClick={() => props.toggle(props.toDos.id)}>
            <h4>{props.toDos.task}</h4>
        </div>
    );
}

export default Todo;