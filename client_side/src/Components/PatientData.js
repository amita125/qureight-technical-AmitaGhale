import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
class PatientData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientIDs: '',
      toView: false,
    }
  }
  handleDelete(event) {
    const patientID = this.props.id
    if (window.confirm('Are you sure you want to delete it forever') === true) {
      fetch('patientApi/deletePatient', {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          patient_id: patientID,
        }),
      })
        .then((response) => {
          response.json()
          console.log(response)
        })
        .then(this.refreshPage())
    }
  }

  refreshPage = () => {
    window.location.reload(false)
  }

  PatientViews = () => {
    this.setState({ toView: true, patientIDs: this.props.id })
    console.log(this.props.id)
    const data = {
      patientIDs: this.props.id,
      loginName: this.props.loginName,
      loginSurname: this.props.loginSurname,
    }
    console.log(data)
  }

  render() {
    if (this.state.toView === true) {
      return (
        <Redirect
          to={{
            pathname: '/patient',
            state: {
              data: this.state.patientIDs,
              loginName: this.props.loginName,
              loginSurname: this.props.loginSurname,
            },
          }}
        />
      )
    }

    return (
      <tr>
        <td>
          <span id="patientName">
            {' '}
            {this.props.name} {this.props.surname}{' '}
          </span>
        </td>

        <td>
          <button
            onClick={this.handleDelete.bind(this, this.props.id)}
            className="btn btn-outline-danger button-style"
            type="button"
          >
            Delete
          </button>
          <button
            onClick={this.PatientViews}
            className="btn btn-outline-success button-style"
            type="button"
          >
            View
          </button>
        </td>
      </tr>
    )
  }
}

export default PatientData
