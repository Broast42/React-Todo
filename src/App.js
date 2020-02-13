import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';
import styled from 'styled-components';

const toDos = [
  {
    "task": 'Organize Garage',
    "id": 1528817077286,
    "completed": false
  },
  {
    "task": 'Bake Cookies',
    "id": 1528817084358,
    "completed": false
  }
];

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Header =styled.header`
  width: 100%;
  height: 100px;
  background: #00cccc;
  color: #ffd633;
  text-shadow: 0px 0px 3px black;
  border-bottom 3px dashed #3333ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormBar = styled.div`
  width: 100%;
  height: 40px;
  background: #5cd65c;
  border-bottom 3px dashed #3333ff;
  padding: 0 15px;
`;

const ListSection = styled.section`
  width: 100%;
  min-height: 600px;
  padding: 5px;
  background: #e6e6e6;
`;
// let saved = localStorage.getItem("todos");
// let savedState = JSON.parse(saved);

// let toDos = savedState;

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      toDos
    
    };
    
  }

  addTodo = (todo) => {

    const newTodo ={
      "task": todo,
      "id": Date.now(),
      "completed": false
    };

    this.setState({
      toDos: [...this.state.toDos, newTodo]
      
    });
    
    
  };

  toggleTodo = id => {
    
    this.setState({
      toDos: this.state.toDos.map(x => {
        if(id === x.id){
          return {
            ...x,
            completed: !x.completed
          };
        }

        return x;
      })
    })
  }

  clearTodo = e => {
    this.setState({
      toDos: this.state.toDos.filter(x => !x.completed)
    });
  };

  searchTodo = (string) => {
    this.setState({
      toDos: this.state.toDos.filter(x=> x.task.includes(string))
    });
  };

  setStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.toDos))
  };
  

  render() {
    
    
    return (
      <Container>
        <Header>
          <h2>Tasks Todo</h2>
        </Header>
        <FormBar>
          <TodoForm add={this.addTodo} clear={this.clearTodo} search={this.searchTodo} store={this.addAndSave}/>
        </FormBar>
        <ListSection>
          <TodoList toDos={this.state.toDos} toggle={this.toggleTodo}  /> 
        </ListSection>  
      </Container>
    );
  }
}

export default App;
