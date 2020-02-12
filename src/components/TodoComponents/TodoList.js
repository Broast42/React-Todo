import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.toDos.map((x,i)=>(
                <Todo key={i} toDos={x} toggle={props.toggle}/>   
            ))}
        </div>
    );
}

export default TodoList;