import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ViewPatients from '../Components/ViewPatients'
import NewPatient from '../Components/NewPatient'
class Dashboard extends Component {
  render() {
    const { userName, userSurname, userLogin } = this.props.location.state.data
    return (
      <div className="container-fluid" id="HomePage">
        <div className="row">
          <div className="col-lg-2" id="asideArea"></div>
          <div className="col-lg-8" id="mainArea">
            <h1>Qureight Hospital </h1>
            <br />
            <ViewPatients name={userName} surname={userSurname} />
          </div>
          <div className="col-lg-2" id="newPatient">
            <NewPatient />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
