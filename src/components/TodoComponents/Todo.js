import React from 'react';

const Todo = props =>{
    return(
        <div>
            <h4>{props.toDos.task}</h4>
        </div>
    );
}

export default Todo;