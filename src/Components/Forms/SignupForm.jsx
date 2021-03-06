import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../CSS/SignupForm.css';

import firebase from '../../utils/firebase';
import { Link } from 'react-router-dom';

const SignupForm = (props) => {
    const history = useHistory();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Signup = async (evt) => {
        try {
            const db = firebase.firestore();
            // evt.preventDefault();

            if (firstname && lastname && email && username && password) {
                let userCredential = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password);

                // Add a new document with a generated id.
                console.log(userCredential);

                let docRef = await db.collection('users').doc(username).set({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    username: username,
                    avatar: '',
                    description: '',
                    tags: [],
                    type: 'user',
                });

                console.log('Document written');

                //Careful using async on AuthStateChange can delay effects
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        // User is signed in.
                        console.log(user);
                        user.updateProfile({ displayName: username });
                        // Update successful.
                        // Signed in

                        console.log(userCredential);
                        // ...
                        history.push('/');
                        history.go(0); //Will likely need a cleaner way to refresh the user state
                    } else {
                        // No user is signed in.
                    }
                });
            } else {
                //Validations
                alert(
                    'Invalid credentials, please ensure all fields are filled'
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container is-max-desktop">
            <div className="signupForm-cont">
                <div className="field ">
                    <p className="control has-icons-left has-icons-right">
                        <input
                            className="input is-small"
                            type="text"
                            placeholder="First Name"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div className="field ">
                    <p className="control has-icons-left has-icons-right">
                        <input
                            className="input is-small"
                            type="text"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div className="field ">
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
                <div className="field ">
                    <p className="control has-icons-left has-icons-right">
                        <input
                            className="input is-small"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                        <button className="button is-success" onClick={Signup}>
                            Sign Up
                        </button>
                    </p>

                    <div className="login">
                        <p>Already have an account?</p>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
