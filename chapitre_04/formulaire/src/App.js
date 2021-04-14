import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      value: '',
      password: '',
      submit: false
    }

    this.myFunc = this.myFunc.bind(this);
    this.myFuncPassword = this.myFuncPassword.bind(this);
    this.funcSubmit = this.funcSubmit.bind(this)

  }

  myFunc(e) {
    this.setState({ value: e.target.value })
  }

  myFuncPassword(e) {
    this.setState({ password: e.target.value })
  }

  funcSubmit() {
    this.setState({ submit: true })
  }

  renderValidationEmail() {
    if (/^[^@]+@[^@]+\.[^@]+$/igm.test(this.state.value)) {
      return (
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input placeholder="Enter email..." onInput={(e) => this.myFunc(e)} type="email" className="form-control is-valid" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
      )

    } else {
      return (
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input placeholder="Enter email..." onInput={(e) => this.myFunc(e)} type="email" className="form-control is-invalid" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
      )

    }
  }

  renderValidationPassword() {
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm.test(this.state.password)) {
      return (
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input placeholder="Enter password..." onInput={(e) => this.myFuncPassword(e)} type="password" class="form-control is-valid" id="exampleInputPassword1"></input>
        </div>
      )
    } else {
      return (
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input placeholder="Enter password..." onInput={(e) => this.myFuncPassword(e)} type="password" class="form-control is-invalid" id="exampleInputPassword1"></input>
        </div>
      )
    }
  }

  renderButton() {
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm.test(this.state.password) && /^[^@]+@[^@]+\.[^@]+$/igm.test(this.state.value)) {
      return <button onClick={this.funcSubmit} type="submit" class="btn btn-primary">Submit</button>
    } else {
      return <button type="submit" class="btn btn-primary" disabled>Submit</button>
    }
  }

  render() {
    if (this.state.submit === false) {


      return (
        <div className="d-flex flex-column align-items-center">
          <p classeName="h1 mb-4" style={{ fontSize: 40, fontWeight: "initial" }}>Login</p>
          <form style={{ width: 500 }}>

            {this.renderValidationEmail()}
            {this.renderValidationPassword()}

            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
              <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>

            {this.renderButton()}

          </form>
        </div>
      )
    } else {
      return (
        <div className="d-flex flex-column align-items-center">
          <p className="h1 mt-2 mb-4" style={{ fontSize: 40, fontWeight: "initial"}}>Login</p>
          <div className="d-flex justify-content-center align-items-center" style={{ width: '450px', height: '200px', backgroundColor: '#eaeaea' }}>
          <h2 style={{ fontSize: '40px', color: 'black'}}>Form submitted</h2>
          </div>
        </div>
      )
    }
  }
}

export default App;