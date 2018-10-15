import actionTypes from '../actionTypes'

export const addTodo = todo => ({
  type: actionTypes.ADD_TODO,
  todo,
})

export const toggleTodo = (id, isComplete) => ({
  type: actionTypes.TOGGLE_TODO,
  isComplete,
  id,
})

export const removeTodo = id => ({
  type: actionTypes.REMOVE_TODO,
  id,
})
