import { useState } from 'react'
import '../css/SignUp.css'
import axios from 'axios'

// const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const SignUp = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [firstname, setFirstname] = useState()
    const [surname, setSurname] = useState()
    const [date_of_birth, setDate_of_birth] = useState()
    const [registered, setRegistered] = useState(false)
    const [signupFail, setSignupFail] = useState(false)


    const funcToSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/signup', 
            { email, password, firstname, surname, date_of_birth })
            if (response.status === 200) {
                setRegistered(true)
            } else {
                setSignupFail(true)
            }
        } catch (error) {
            setSignupFail(true)
            console.log(error);
        }
    }

    if (registered) {
        return (
            <div>
                registered with success
            </div>
        )
    } else if (signupFail) {
        return (
            <div>
                there are a problem in your registration, try again please
            </div>
        )
    } else {
        return (
            <div className='signup'>
                <h1 className="mb-3">Sign Up</h1>

                <div className="form-group mb-3">
                    <label forHtml="exampleInputEmail1">Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group mb-3">
                    <label forHtml="exampleInputPassword1">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div className="form-group mb-3">
                    <label forHtml="exampleInputPassword1">Confirm password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div className="form-group mb-3">
                    <label forHtml="firstnam">Firstname</label>
                    <input onChange={(e) => setFirstname(e.target.value)} type="text" className="form-control" id="firstname" aria-describedby="firstname" placeholder="Enter firstname" />
                </div>

                <div className="form-group mb-3">
                    <label forHtml="surname">Surname</label>
                    <input onChange={(e) => setSurname(e.target.value)} type="text" className="form-control" id="surname" aria-describedby="surname" placeholder="Enter surname" />
                </div>

                <div className="form-group mb-3">
                    <label forHtml="date_of_birth">Date of birth</label>
                    <input onChange={(e) => setDate_of_birth(e.target.value)} type="date" className="form-control" id="date_of_birth" aria-describedby="date_of_birth" placeholder="Enter Date of birth" />
                </div>

                <button onClick={funcToSubmit} type="submit" className="btn btn-primary">Submit</button>

            </div>
        )
    }
}

export default SignUp
