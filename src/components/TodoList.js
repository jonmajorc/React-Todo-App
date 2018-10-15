import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions'
import PropTypes from 'prop-types'

export class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  }
  render() {
    const { todos, toggleTodo, removeTodo } = this.props
    return (
      <ul className="todo-list">
        {todos.map(({ id, todo, isComplete }) => (
          <li
            data-test={`todo-item-${id}`}
            className="todo-list__item"
            key={id}
            onClick={() => toggleTodo(id, isComplete)}
          >
            <button
              className="todo-list__item__btn--del"
              onClick={e => {
                e.stopPropagation()
                removeTodo(id)
              }}
            >
              X
            </button>
            <span className="todo-list__item__text" data-completed={isComplete}>
              {todo}
            </span>
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = ({ todos }) => ({
  todos,
})

const { removeTodo, toggleTodo } = actions

export default connect(mapStateToProps, {
  removeTodo,
  toggleTodo,
})(TodoList)
