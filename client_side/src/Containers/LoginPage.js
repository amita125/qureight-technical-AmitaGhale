import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      data: [],
      toDashboard: false,
    }
  }
  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }
  handleUsername = (e) => {
    this.setState({ username: e.target.value.toUpperCase() })
  }
  handleSubmit = (e) => {
    const data = {
      username: this.state.username,
      password: this.state.password,
    }

    fetch('api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status)
        else return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({ data: data.employeeInfo, toDashboard: true })
        console.log(this.state.toDashboard, 'true ')
      })
      .catch((error) => {
        console.log('error: ' + error)
        console.log('user not found')
        window.alert('wrong username and password')
        this.setState({ requestFailed: true })
      })
    e.preventDefault()
  }

  render() {
    if (this.state.toDashboard === true) {
      return (
        <Redirect
          to={{
            pathname: '/dashboard',
            state: { data: this.state.data },
          }}
        />
      )
    }
    return (
      <div className="container-fluid" id="HomePage">
        <div className="row">
          <div className="col-lg-4" id="asideArea"></div>
          <div className="col-lg-4">
            <div className="App-body" id="formArea">
              <h1>Qureight Hospital Login</h1> <br />
              <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleUsername}
                    required
                  />
                </div>
                <div className="form-group row">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handlePassword}
                    autoComplete="on"
                  />
                </div>
                <button type="submit" className="btn btn-primary loginButton">
                  Login
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-4" id="asideArea"></div>
        </div>
      </div>
    )
  }
}
export default LoginPage
