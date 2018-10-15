// modules
import React from 'react'
import { mount } from 'enzyme'
// import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { configureStoreTest } from '../store/configureStore'
import initialState from '../store/initialState'
import { createStore } from 'redux'
import rootReducer from '../store/reducers'
import { MemoryRouter as Router } from 'react-router-dom'
// components
import App from '../layouts/App'

/***************************************************************************\
  Object Mothers
\***************************************************************************/
export function renderAppComponent(props = {}, opts) {
  const { route = '', Comp = App } = opts

  const initialStoreState = {
    ...initialState,
    ...props,
  }

  let store, container

  const mockStore = configureStoreTest()
  store = createStore(rootReducer, initialStoreState)
  return {
    store,
    mount: mount(
      <Provider store={store}>
        <Router initialEntries={[route]}>
          <Comp />
        </Router>
      </Provider>
    ),
  }
}
