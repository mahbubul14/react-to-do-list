/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  render() {
    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          />
          {this.props.todo.title}
          <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          // value={title}
          // onChange={(e) => {
          //   console.log(e.target.value, id);
          // }}
        />
      </li>
    );
  }
}

export default TodoItem;
