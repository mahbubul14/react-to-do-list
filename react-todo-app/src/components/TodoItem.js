import React, { Component } from 'react'

class TodoItem extends Component {

  handleEditing = () => {
    console.log('edit mode activated')
  }

  render() {
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing}>
          <input type="checkbox"
          checked= {this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          />
          {this.props.todo.title}
          <button onClick ={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
        </div>
        <input type ="text" className ={styles.textInput}/>
      </li>
  )}
}

export default TodoItem;
