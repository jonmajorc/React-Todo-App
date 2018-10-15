import React from 'react'

// utils
import { renderAppComponent } from '../utils/testFixtures'

// components
import AddTodoConnected, { AddTodo } from './AddTodo'
import { Todo } from '../pages/Todos'
import actions from '../store/actions'

describe('AddTodo', () => {
  it('inputs new todo item in input field with existing items', () => {
    const todos = [
      {
        id: 0,
        todo: 'clean car',
        isComplete: false,
      },
      {
        id: 1,
        todo: 'brush teeth',
        isComplete: false,
      },
    ]
    const addTodo = 'clean my room'

    const container = renderAppComponent(
      {
        todos,
      },
      { Comp: AddTodoConnected }
    )
    const AddTodoComponent = container.mount
    const addTodoInput = AddTodoComponent.find('[data-test="add-todo-input"]')
    const addTodoBtn = AddTodoComponent.find('[data-test="add-todo-btn"]')

    addTodoInput.simulate('change', { target: { value: addTodo } })

    expect(addTodoInput.instance().value).toEqual(addTodo)

    addTodoBtn.simulate('click')

    expect(container.store.getState().todos).toHaveLength(3)
    expect(container.store.getState().todos[2].id).toEqual(2)
  })

  it('inputs new todo item in input field', () => {
    const todos = []
    const addTodo = 'clean my room'

    const container = renderAppComponent(
      {
        todos,
      },
      { Comp: AddTodoConnected }
    )

    const AddTodoComponent = container.mount
    const addTodoInput = AddTodoComponent.find('[data-test="add-todo-input"]')
    const addTodoBtn = AddTodoComponent.find('[data-test="add-todo-btn"]')

    addTodoInput.simulate('change', { target: { value: addTodo } })

    expect(addTodoInput.instance().value).toEqual(addTodo)

    addTodoBtn.simulate('click')

    expect(container.store.getState().todos).toHaveLength(1)
    expect(container.store.getState().todos[0].id).toEqual(0)
  })
})
