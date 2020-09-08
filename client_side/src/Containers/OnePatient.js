import React, { Component } from 'react'

import { Redirect, browserHistory } from 'react-router-dom'

import EditPatient from '../Components/EditPatient'
export class OnePatient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      toView: false,
    }
  }
  componentDidMount() {
    fetch(`/patientApi/${this.props.location.state.data}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ data: data })
      })
  }
  refreshPage = () => {
    window.location.reload(false)
  }

  goback = () => {
    this.setState({ toView: true })
    const dataUser = {
      userName: this.props.loginName,
      userSurname: this.props.loginSurname,
    }
    this.setState({ data: dataUser })
    console.log(dataUser)
  }
  render() {
    if (this.state.toView === true) {
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
      <div>
        {this.props.location.state.data}
        {this.props.loginName}
        {this.state.data ? (
          this.state.data.map((object) => (
            <div key={object}>
              <div className="user-details">
                <p>
                  <h3>Patient Name</h3>: {object.name} {object.surname}
                  {object.age}
                  {object.height} {object.notes}
                </p>
                <EditPatient
                  id={this.props.location.state.data}
                  name={object.name}
                  surname={object.surname}
                  age={object.age}
                  height={object.height}
                  notes={object.notes}
                />
              </div>
            </div>
          ))
        ) : (
          <h1>Data logged in </h1>
        )}

        <button onClick={this.goback}>back</button>
      </div>
    )
  }
}

export default OnePatient
