// modules
import React, { Component } from 'react'

// components
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

export class Todos extends Component {
  state = {
    isAdding: false,
  }

  onAddTodo = () => {
    this.setState(prevState => ({
      isAdding: !prevState.isAdding,
    }))
  }

  onCancel = () => {
    this.setState(prevState => ({
      isAdding: false,
    }))
  }

  render() {
    return (
      <div data-test="todo-page" className="todos">
        <header className="todos__header">
          <h3>My Todos</h3>
          <small className="todos__header__date">
            {new Date().toDateString()}
          </small>
          {this.state.isAdding ? (
            <AddTodo onCancel={this.onCancel} />
          ) : (
            <button
              className="todos__new-todo-btn"
              data-test="new-todo-btn"
              onClick={this.onAddTodo}
            >
              + Add Todo
            </button>
          )}
        </header>
        <small className="todos__header__help">
          (&nbsp;Click a todo to complete it!&nbsp;)
        </small>
        <TodoList />
      </div>
    )
  }
}
export default Todos
