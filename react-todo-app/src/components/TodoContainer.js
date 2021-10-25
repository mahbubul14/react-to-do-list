import React, { Component } from 'react'
import TodosList from './TodosList'
import Header from "./Header"
import InputTodo from './InputTodo'

class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Set up development environment",
        completed: true
      },
      {
        id: 2,
        title: "Set up development environment",
        completed: true
      },
      {
        id: 3,
        title: "Set up development environment",
        completed: true
      }
    ]
  };

  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      }),
    }));
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !==id;
        })
      ]
    });
  };

  addToItem = title => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div>
         <Header />
         <InputTodo addTodoProps = {this.addToItem}/>
        <TodosList todos = {this.state.todos}
        handleChangeProps = {this.handleChange}
        deleteTodoProps={this.delTodo}
        />
      </div>
  ) }
}

export default TodoContainer
