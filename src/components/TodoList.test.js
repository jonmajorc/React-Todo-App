// modules
import React from 'react'

// utils
import { renderAppComponent } from '../utils/testFixtures'

// components
import TodoListConnected, { TodoList } from './TodoList'
import actions from '../store/actions'

describe('TodoList', () => {
  it('renders a list of todos', () => {
    const todos = [
      {
        id: 0,
        item: 'clean car',
        isComplete: false,
      },
    ]

    const container = renderAppComponent(
      {
        todos,
      },
      { Comp: TodoListConnected }
    )
    const TodoListComponent = container.mount.find(TodoList)
    expect(TodoListComponent.prop('todos')).toEqual(todos)
  })

  it('renders a list of many todos with different keys', () => {
    const todos = [
      {
        id: 0,
        item: 'clean car',
        isComplete: false,
      },
      {
        id: 1,
        item: 'clean car',
        isComplete: false,
      },
    ]

    const container = renderAppComponent(
      {
        todos,
      },
      { Comp: TodoListConnected }
    )
    const TodoListComponent = container.mount.find(TodoList)
    expect(TodoListComponent.prop('todos')).toEqual(todos)
  })

  it('toggles completetions todos on click', () => {
    const selTodo = `[data-test="todo-item-1"]`
    const todos = [
      {
        id: 0,
        item: 'clean car',
        isComplete: false,
      },
      {
        id: 1,
        item: 'clean car',
        isComplete: false,
      },
    ]

    const container = renderAppComponent(
      {
        todos,
      },
      { Comp: TodoListConnected }
    )
    const TodoListComponent = container.mount.find(TodoList)

    let todo = TodoListComponent.find(selTodo)
    expect(todo).toMatchSnapshot()
    todo.simulate('click')
    expect(todo.instance()).toMatchSnapshot()
  })
})
