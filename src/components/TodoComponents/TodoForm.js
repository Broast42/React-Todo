import React from 'react';
import styled from 'styled-components';

const FlexForm = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    min-width: 100px;
    height: 20px;
    background: #00cccc;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 1px 0 grey;
    margin: 0 5px;

    &:hover{
        background: #d6f5f5;
    }
`;

const ButtonRed = styled(Button)`
    background: #ff9980;
    margin-left: 0px;

    &:hover{
        background: #ffd6cc; 
    }
`;

const Flex = styled.div`
    display: flex;
`;

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            item: ""
        };
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        
    }

    submitTodo = e => {
        e.preventDefault();
        this.props.add(this.state.item);
        
        
    }

    submitSearch = e => {
        e.preventDefault();
        this.props.search(this.state.search);
        
    }

    render(){
    
        return(
            <FlexForm>
                <ButtonRed onClick={() => this.props.clear()}>Clear Completed</ButtonRed>
                <form onSubmit={this.submitTodo}>
                    <input type="text" name="item" onChange={this.handleChange}/>
                    <Button type="submit">Add a Task</Button>
                </form>
                <Flex>
                    <form onSubmit={this.submitSearch}>
                        <input type="text" name="search" onChange={this.handleChange} />
                        <Button type="submit">Search Tasks</Button>
                    </form> 
                    <ButtonRed onClick={() => this.props.clearSearch()}>Clear Search</ButtonRed> 
                </Flex>
                   
            </FlexForm>
            
        );
    }


}

export default TodoForm;