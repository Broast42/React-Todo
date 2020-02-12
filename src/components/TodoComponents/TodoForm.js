import React from 'react';

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
        this.props.add(e, this.state.item);
    }

    render(){
        return(
            <form onSubmit={this.submitTodo}>
                <input type="text" name="item" onChange={this.handleChange}/>
                <button type="submit">Add a Task</button>
                <button>Clear Completed</button>
            </form>
        );
    }


}

export default TodoForm;