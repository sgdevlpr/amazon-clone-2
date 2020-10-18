import React from 'react'
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // some fancy firebase login stuff.......
    }

    const register = e => {
        e.preventDefault();
        // do some fancy firebase register stuff.......
    }

    return (
        <div className="login"> 
            <Link to="/">
            <img className="login__logo" src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} 
                    onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} 
                    onChange={e => setpassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign in</button>
                    <p>
                      By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                      see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login