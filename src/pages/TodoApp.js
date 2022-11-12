/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import TodoList from '../components/TodoList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { text } = this.state;

    if (text.length === 0) {
      return;
    }
    const newItem = {
      text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  }

  render() {
    const { text, items } = this.state;

    return (
      <div style={{ margin: 10 }}>

        <h3>TODO</h3>

        <TodoList items={items} />

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="newTodo" style={{ marginRight: 10 }}>
            What needs to be done?
          </label>

          <input
            id="newTodo"
            onChange={this.handleChange}
            value={text}
          />

          <button type="button">
            Add #
            {items.length + 1}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoApp;
