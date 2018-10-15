import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
  }

  state = {
    id: null,
    todo: '',
    isComplete: false,
  }

  handleTodoInput = e => {
    const todo = e.target.value
    this.setState({
      todo,
    })
  }

  handleAddTodo = e => {
    if ((e.key !== 'Enter' && e.type !== 'click') || !this.state.todo) return
    this.props.addTodo({ ...this.state, id: this.nextTodoId })
  }

  render() {
    const { onCancel } = this.props

    return (
      <div data-test="add-todo" className="add-todo">
        <input
          type="text"
          onChange={this.handleTodoInput}
          value={this.state.todo}
          data-test="add-todo-input"
          className="add-todo__input"
          onKeyPress={this.handleAddTodo}
        />
        <button
          data-test="add-todo-btn"
          className="add-todo__btn--add"
          onClick={this.handleAddTodo}
        >
          Add
        </button>
        {onCancel && (
          <button
            data-test="cancel-todo-btn"
            className="add-todo__btn--cancel"
            onClick={onCancel}
          >
            cancel
          </button>
        )}
      </div>
    )
  }
  get nextTodoId() {
    const { todos } = this.props
    const todoLen = todos.length
    const todo = todos[todoLen ? todoLen - 1 : 0]
    if (todo) {
      return todo.id + 1
    }
    return 0
  }
}

const mapStateToProps = ({ todos }) => ({
  todos,
})

const { addTodo } = actions

export default connect(mapStateToProps, {
  addTodo,
})(AddTodo)
