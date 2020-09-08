import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PatientData from './PatientData'
class ViewPatients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientData: [],
    }
  }
  componentDidMount() {
    fetch('patientApi/datas')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ patientData: data })
      })
  }

  render() {
    return (
      <div className="container-fluid" id="patientPage">
        <div className="row">
          <div className="col-lg-12" id="patintArea">
            <div id="viewHabits">
              <h1>{this.props.name}</h1>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Patient Name</th>

                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.patientData ? (
                    this.state.patientData.map((object) => (
                      <PatientData
                        id={object.patient_id}
                        name={object.name}
                        surname={object.surname}
                        age={object.age}
                        height={object.height}
                        notes={object.notes}
                        handleDelete={this.props.handleDelete}
                        handleView={this.props.handleView}
                        loginName={this.props.name}
                        loginSurname={this.props.surname}
                      />
                    ))
                  ) : (
                    <h1>No patients in the database </h1>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewPatients
