import React, { Component } from 'react'
import TodosList from './TodosList'
import Header from "./Header"
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Set up development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Set up development environment",
        completed: true
      },
      {
        id: uuidv4(),
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
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    </div>
  )
 }
}

export default TodoContainer
