import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import LoginPage from './Containers/LoginPage'
import RegisterPage from './Containers/RegisterPage'
import Dashboard from './Containers/Dashboard'
import OnePatient from './Containers/OnePatient'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/patient" component={OnePatient} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
