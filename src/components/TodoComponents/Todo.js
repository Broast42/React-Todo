import React from 'react';
import './Todo.css';
import styled from 'styled-components';

const Card = styled.div`
    width: 165px;
    min-height: 30px;
    margin: 5px;
    background: #5cd65c;
    border 3px solid #3333ff;
    border-radius: 20px;
    box-shadow: 2px 2px 2px black;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background: #ffd6cc;
    }

`;

const Todo = props =>{
    return(
        <Card className={`${props.toDos.completed ? "complete": ""}`}
        onClick={() => props.toggle(props.toDos.id)}>
            <h4>{props.toDos.task}</h4>
        </Card>
    );
}

export default Todo;