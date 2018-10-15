import initialState from '../initialState'
import actionTypes from '../actionTypes'

export default (state = initialState.todos, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, action.todo]
    case actionTypes.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isComplete: !action.isComplete,
          }
        }
        return todo
      })
    case actionTypes.REMOVE_TODO:
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}
