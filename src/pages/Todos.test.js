import React from 'react'

// utils
import { renderAppComponent } from '../utils/testFixtures'
import toJson from 'enzyme-to-json'
// components
import { AddTodo } from '../components/AddTodo'
import { TodoList } from '../components/AddTodo'

// pages
import { Todo } from './Todos'
// redux
import actions from '../store/actions'

describe('Todos Page', () => {
  it('renders todo page', () => {
    const todos = []
    const todoPage = renderAppComponent(
      {
        todos,
      },
      { route: '/todos' }
    ).mount
    expect(todoPage.find('[data-test="todo-page"]')).toMatchSnapshot()
  })

  it.only('inputs new todo item in input field with existing items', () => {
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
      { route: '/todos' }
    )
    const TodoPage = container.mount
    const newTodoBtn = TodoPage.find('[data-test="new-todo-btn"]')

    newTodoBtn.simulate('click')
    const AddTodoComponent = container.mount.find(AddTodo)
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
      { route: '/todos' }
    )

    const TodoPage = container.mount
    const newTodoBtn = TodoPage.find('[data-test="new-todo-btn"]')

    newTodoBtn.simulate('click')
    const AddTodoComponent = container.mount.find(AddTodo)

    const addTodoInput = AddTodoComponent.find('[data-test="add-todo-input"]')
    const addTodoBtn = AddTodoComponent.find('[data-test="add-todo-btn"]')

    addTodoInput.simulate('change', { target: { value: addTodo } })

    expect(addTodoInput.instance().value).toEqual(addTodo)

    addTodoBtn.simulate('click')

    expect(container.store.getState().todos).toHaveLength(1)
    expect(container.store.getState().todos[0].id).toEqual(0)
  })

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
      { route: '/todos' }
    )
    const TodoPage = container.mount
    const newTodoBtn = TodoPage.find('[data-test="new-todo-btn"]')

    newTodoBtn.simulate('click')
    const AddTodoComponent = container.mount.find(AddTodo)
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
      { route: '/todos' }
    )

    const TodoPage = container.mount
    const newTodoBtn = TodoPage.find('[data-test="new-todo-btn"]')

    newTodoBtn.simulate('click')
    const AddTodoComponent = container.mount.find(AddTodo)

    const addTodoInput = AddTodoComponent.find('[data-test="add-todo-input"]')
    const addTodoBtn = AddTodoComponent.find('[data-test="add-todo-btn"]')

    addTodoInput.simulate('change', { target: { value: addTodo } })

    expect(addTodoInput.instance().value).toEqual(addTodo)

    addTodoBtn.simulate('click')

    expect(container.store.getState().todos).toHaveLength(1)
    expect(container.store.getState().todos[0].id).toEqual(0)
  })

  it('does not add a empty todo item', () => {
    const todos = []
    const addTodo = ''

    const container = renderAppComponent(
      {
        todos,
      },
      { route: '/todos' }
    )

    const TodoPage = container.mount
    const newTodoBtn = TodoPage.find('[data-test="new-todo-btn"]')

    newTodoBtn.simulate('click')

    const addTodoInput = TodoPage.find('[data-test="add-todo-input"]')
    const addTodoBtn = TodoPage.find('[data-test="add-todo-btn"]')

    addTodoInput.simulate('change', { target: { value: addTodo } })

    expect(addTodoInput.instance().value).toEqual(addTodo)

    addTodoBtn.simulate('click')

    expect(container.store.getState().todos).toHaveLength(0)
  })

  it('can cancel input for new todo item', () => {
    const todos = []
    const addTodo = 'clean my room'

    const container = renderAppComponent(
      {
        todos,
      },
      { route: '/todos' }
    )

    const TodoPage = container.mount
    const newTodoBtn = TodoPage.find('[data-test="new-todo-btn"]')
    newTodoBtn.simulate('click')

    const cancelTodoBtn = TodoPage.find('[data-test="cancel-todo-btn"]')

    expect(TodoPage.find('[data-test="add-todo"]')).toHaveLength(1)

    cancelTodoBtn.simulate('click')

    expect(TodoPage.find('div[data-test="add-todo"]')).toHaveLength(0)

    expect(container.store.getState().todos).toHaveLength(0)
  })
})
