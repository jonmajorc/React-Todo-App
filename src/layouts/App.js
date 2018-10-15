// modules
import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
// assets
import logo from '../images/logo.svg'

// pages
import Todos from '../pages/Todos'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h1 className="app_title">Welcome to React</h1>
          <nav className="nav">
            <ul>
              <li>
                Check out my <Link to="/todos">Todos</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/todos" component={Todos} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
