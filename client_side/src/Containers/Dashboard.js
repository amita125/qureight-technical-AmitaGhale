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
          <div className="col-lg-8" id="asideArea">
            <h1>ok</h1>
            <h3>
              Welcome: {userName} {userSurname}
            </h3>
            <ViewPatients name={userName} surname={userSurname}/>
          </div>
          <div className="col-lg-4" id="asideArea">
            <NewPatient />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
