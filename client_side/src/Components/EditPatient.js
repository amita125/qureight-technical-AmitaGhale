import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

export class EditPatient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientName: this.props.name,
      patientSurname: this.props.surname,
      patientAge: this.props.age,
      patientHeight: this.props.height,
      patientNotes: this.props.notes,
    }
  }
  handlePatientname = (e) => {
    this.setState({ patientName: e.target.value })
  }
  handlePatientsurname = (e) => {
    this.setState({ patientSurname: e.target.value })
  }
  handlePatientage = (e) => {
    this.setState({ patientAge: e.target.value })
  }
  handlePatientheight = (e) => {
    this.setState({ patientHeight: e.target.value })
  }
  handlePatientnotes = (e) => {
    this.setState({ patientNotes: e.target.value })
  }

  handleSubmit = (e) => {
    const data = {
      name: this.state.patientName,
      surname: this.state.patientSurname,
      age: this.state.patientAge,
      height: this.state.patientHeight,
      notes: this.state.patientNotes,
    }
    fetch(`/patientApi/${this.props.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      console.log('Error:', error)
    })

    e.preventDefault()
    // this.props.loadFunction(this.state);
  }
  refreshPage = () => {
    window.location.reload(false)
  }
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          Add Patient
        </button>
        <div
          className="modal fade bd-example-modal-lg"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  New Patient
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group row">
                    <label
                      htmlFor="patientName"
                      className="col-sm-2 col-form-label"
                    >
                      Patient Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="patientName"
                        value={this.state.patientName}
                        onChange={this.handlePatientname}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="patientSurname"
                      className="col-sm-2 col-form-label"
                    >
                      Patient surname
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="patientSurname"
                        value={this.state.patientSurname}
                        onChange={this.handlePatientsurname}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="patientAge"
                      className="col-sm-2 col-form-label"
                    >
                      Patient Age
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="number"
                        className="form-control"
                        id="patientAge"
                        value={this.state.patientAge}
                        onChange={this.handlePatientage}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="patientHeight"
                      className="col-sm-2 col-form-label"
                    >
                      Patient Height
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="patientHeight"
                        value={this.state.patientHeight}
                        onChange={this.handlePatientheight}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="exampleFormControlTextarea1">Notes</label>

                    <div className="col-sm-10">
                      <textarea
                        className="form-control"
                        id="patientNotes"
                        rows="3"
                        value={this.state.patientNotes}
                        onChange={this.handlePatientnotes}
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-10">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.refreshPage}
                      >
                        update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditPatient
