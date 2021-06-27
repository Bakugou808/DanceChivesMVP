import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../CSS/LoginForm.css';
import { Link } from 'react-router-dom';

import firebase from '../../utils/firebase';

const LoginForm = (props) => {
    const history = useHistory();

    // Declare a new state variable, which we'll call "count"
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = async (evt) => {
        try{
            let userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            // Signed in
            var user = userCredential.user;
            // ...
            history.push('/');
        } catch(error){
            console.log(error);
        }    
    };

    return (
        <div className="loginForm-cont container is-max-desktop">
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input
                        className="input is-small"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input
                        className="input is-small"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control">
                    <button className="button is-success" onClick={SignIn}>
                        Login
                    </button>
                </p>
                <Link to="/resetpassword">Forgot Password?</Link>
                <div className="signup">
                    <p>Don't have an account?</p>
                    <Link to="/signup">Register now</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
