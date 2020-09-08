import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

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
      <div className="container-fluid" id="patientPage">
        <div className="row">
          <div className="col-lg-3" id="asideArea"></div>
          <div className="col-lg-6" id="patientArea">
            {this.state.data ? (
              this.state.data.map((object) => (
                <div key={object}>
                  <div className="user-details">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <label for="inputname">Name</label>
                          <input
                            class="form-control"
                            type="text"
                            value={object.name}
                            readonly
                          />
                        </div>
                        <div class="form-group col-md-4">
                          <label for="inputPassword4">Surname</label>
                          <input
                            class="form-control"
                            type="text"
                            value={object.surname}
                            readonly
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <label for="inputname">Age</label>
                          <input
                            class="form-control"
                            type="text"
                            value={object.age + '  years'}
                            readonly
                          />
                        </div>
                        <div class="form-group col-md-4">
                          <label for="inputPassword4">height</label>
                          <input
                            class="form-control"
                            type="text"
                            value={object.height + '  cm'}
                            readonly
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="inputAddress2">Notes</label>

                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          value={object.notes}
                        ></textarea>
                      </div>
                    </form>

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
          </div>

          <div className="col-lg-3" id="asideArea">
            <button
              type="button"
              class="btn btn-primary btn-lg btn-block"
              onClick={this.goback}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default OnePatient
