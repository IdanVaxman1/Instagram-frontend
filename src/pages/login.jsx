import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Navigate } from "react-router-dom";


import { signin, signup } from '../store/user.actions'
import Input from '../cmps/input'



export const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialState = { email: '', fullName: '', password: '' }
    const user = JSON.parse(localStorage.getItem('user'))
    const [isSignUp, setisSignUp] = useState(false)
    const [formData, setformData] = useState(initialState)

    const handleClick = () => { setisSignUp(current => !current) }

    const handleChange = ev => { setformData({ ...formData, [ev.target.name]: ev.target.value }) }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        (isSignUp) ? dispatch(signup(formData, navigate)) : dispatch(signin(formData, navigate))
    }

    console.log(user);


    return (
        <section className="login-container">
            <section className="login-card">
                <div className="login-logo"><h2>Instgram</h2></div>
                <div className="login-input">
                    <form onSubmit={handleSubmit}>
                        <Input handleChange={handleChange} type='text' name='email' placeholder="email" />
                        {isSignUp && <Input handleChange={handleChange} type='text' name='fullName' placeholder="Full Name" />}
                        <Input handleChange={handleChange} type='password' name='password' placeholder="Password" />

                        <div className="login-btn">
                            <button>{isSignUp ? 'Sign up' : 'Log In'}</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="signup-card">
                {isSignUp ? <p>Have an account?</p> : <p>Don't have an account?</p>}
                <span onClick={handleClick}>{isSignUp ? 'Log in' : 'Sign up'}</span>
            </section>
        </section>
    )
}