import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../CSS/LoginForm.css';
import { Link } from 'react-router-dom';

import firebase from '../../utils/firebase';

const ResetPasswordForm = (props) => {
    const history = useHistory();

    // Declare a new state variable, which we'll call "count"
    const [email, setEmail] = useState('');

    const resetPassword = async (evt) => {

        try {
          let passwordResetEmail = await firebase.auth().sendPasswordResetEmail(email);
            // Password reset email sent!
            // ..
             console.log('Password reset email sent!');

        } catch(error) {
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
                <p className="control">
                    <button
                        className="button is-success"
                        onClick={resetPassword}
                    >
                        Reset Password
                    </button>
                </p>
            </div>

            <div className="login">
                Return to <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default ResetPasswordForm;
