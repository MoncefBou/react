import { useState } from "react"
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [wrongLogin, setWrongLogin] = useState(false)
    const [connected, setConnected] = useState(false)

    const funcToLogin = async () => {
        try {

            const response = await axios.post('http://localhost:8000/login',
                { email, password })

            console.log(response);

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token)
                setConnected(true)
            }
        } catch (error) {
            setWrongLogin(true)
            console.log(error);
        }
    }

    if (connected) {
        return (
            <div>
                <h3>You are connected</h3>
            </div>
        )
    } else {
        return (
            <div>

                <h1 className="mb-3">Login</h1>

                {wrongLogin && <h3>wrong email or password</h3>}

                <div className="form-group mb-3">
                    <label forHtml="exampleInputEmail1">Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group mb-3">
                    <label forHtml="exampleInputPassword1">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button onClick={funcToLogin} type="submit" className="btn btn-primary">Submit</button>

            </div>
        )
    }
}

export default Login
