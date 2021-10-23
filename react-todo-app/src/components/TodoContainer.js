import React, { Component } from 'react'
import TodosList from './TodosList'
import Header from "./Header"

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

  render() {
    return (
      <div>
         <Header />
        <TodosList todos = {this.state.todos}/>
      </div>
  ) }
}

export default TodoContainer
