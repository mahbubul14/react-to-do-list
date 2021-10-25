import React, { Component } from 'react'

export default class InputTodo extends Component {
  state ={
    title: "",
  };

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value,
  });
};

handleSubmit = e => {
  if (this.state.title.trim()){
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ""
    });
  } else {
    alert('Please write item')
  }
};

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
