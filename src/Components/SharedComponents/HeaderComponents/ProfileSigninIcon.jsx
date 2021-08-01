import React, { useEffect, useState } from 'react';
import {
    useHistory,
    Link,

    // useLocation,
    // useParams,
    // useRouteMatch,
} from 'react-router-dom';
import firebase from '../../../utils/firebase';

const ProfileSigninIcon = (props) => {
    let history = useHistory();

    const { userName } = props;
    const [loggedInUser, setLoggedInUser] = useState(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                // User is signed in.
                setLoggedInUser(user.displayName);
                console.log('Welcome');
                console.log(loggedInUser);
            } else {
                // No user is signed in.
                setLoggedInUser(null);
                console.log('No user is currently logged in');
            }
        });
    });

    const signOut = async () => {
        try {
            await firebase.auth().signOut();
            // Sign-out successful.
            console.log('You are now signed out.');
            history.push('/login');
        } catch (error) {
            console.log(error);
        }
    };

    const Login = () => {
        // history.push('/login');
        history.replace('/login');
    };
    return (
        <div>
            <Link style={{ color: 'inherit' }} to="/userprofile">
                <figure className="image is-64x64">
                    <img
                        className="is-rounded"
                        src="https://bulma.io/images/placeholders/128x128.png"
                    />
                </figure>
            </Link>
            {/* {userName} */}

            <div id="username">
                {loggedInUser ? loggedInUser : <p>Guest</p>}
            </div>

            <div id="signedinout">
                {loggedInUser ? (
                    <button onClick={signOut}>Logout </button>
                ) : (
                    <button onClick={Login}>Sign In</button>
                )}
            </div>
        </div>
    );
};

export default ProfileSigninIcon;

ProfileSigninIcon.defaultProps = {
    userName: 'J',
};
