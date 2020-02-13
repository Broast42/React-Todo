import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';
import styled from 'styled-components';

// const toDos = [
//   {
//     "task": 'Organize Garage',
//     "id": 1528817077286,
//     "completed": false
//   },
//   {
//     "task": 'Bake Cookies',
//     "id": 1528817084358,
//     "completed": false
//   }
// ];

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
let saved = localStorage.getItem("todos");
let savedState = JSON.parse(saved);
let toDos = savedState;
if(savedState === null){
  toDos = [];
}

let searchToDos = toDos;
let isSearching = false;

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      toDos,
      searchToDos
      
    };
    
  }

  addTodo = (todo) => {

    const newTodo ={
      "task": todo,
      "id": Date.now(),
      "completed": false
    };

    this.setState({
      toDos: [...this.state.toDos, newTodo],
    });
    
    
  };

  // toggleTodo = id => {
    
  //   this.setState({
  //     toDos: this.state.toDos.map(x => {
  //       if(id === x.id){
  //         return {
  //           ...x,
  //           completed: !x.completed
  //         };
  //       }

  //       return x;
  //     })
  //   })


  // };

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
      }),

      searchToDos: this.state.searchToDos.map(x => {
        if(id === x.id){
          return {
            ...x,
            completed: !x.completed
          };
        }

        return x;
      })

    })
  };



  clearTodo = e => {
    this.setState({
      toDos: this.state.toDos.filter(x => !x.completed),
      searchToDos: this.state.searchToDos.filter(x => !x.completed)
    });
  };

  searchTodo = (string) => {
    isSearching = true;
    this.setState({
      searchToDos: this.state.toDos.filter(x=> x.task.includes(string))
    });
  };

  clearSearch = () => {
    isSearching = false;
    this.setState({
      searchToDos: toDos
    });
  };
 

  render() {
    localStorage.setItem("todos", JSON.stringify(this.state.toDos));
    return (
      <Container>
        <Header>
          <h2>Tasks Todo</h2>
        </Header>
        <FormBar>
          <TodoForm add={this.addTodo} clear={this.clearTodo} search={this.searchTodo} store={this.setStorage} clearSearch={this.clearSearch} />
        </FormBar>
        <ListSection>
          {isSearching === false ? <TodoList toDos={this.state.toDos} toggle={this.toggleTodo}  />: 
            <TodoList toDos={this.state.searchToDos} toggle={this.toggleTodo}  /> 
          }
          
        </ListSection>  
      </Container>
    );
  }
}

export default App;
