import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const FlexDiv = styled.div`
    display: flex;
    flex-flow: row wrap;

`;

const TodoList = props => {
    return(
        <FlexDiv>
            {props.toDos.map((x,i)=>(
                <Todo key={i} toDos={x} toggle={props.toggle}/>   
            ))}
        </FlexDiv>
    );
}

export default TodoList;