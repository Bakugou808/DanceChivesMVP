import React, { useEffect, useState } from 'react';
import {
    useParams,
    useRouteMatch,
    Switch,
    Route,
    useHistory,
} from 'react-router-dom';

import firebase from 'firebase';
import '../../CSS/UserProfile.css';
const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    let { userID } = firebase.auth().currentUser.uid;
    let { params } = useRouteMatch();
    const history = useHistory();

    const grabUserIDFromUrl = (userID) => {
        setUserData(userID);
    };

    const getUser = async (e) => {
        const db = firebase.firestore();

        let doc = await db.collection('users').doc(userID).get();

        if (doc.exists) {
            console.log(doc.data());
        } else {
            throw new Error('Could not get document for ' + userID);
        }
    };

    //Load user data
    useEffect(() => {
        userID && grabUserIDFromUrl(userID);
        getUser();
    }, [userID]);

    return (
        <div className="container">
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img
                                    src="https://bulma.io/images/placeholders/96x96.png"
                                    alt="Placeholder image"
                                />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">John Smith</p>
                        </div>
                    </div>

                    <div className="content">
                        Add a description with your own
                        <a href="#"> #ownedtag</a>
                        <br />
                        <ul>
                            {userID}
                            <a href="#">
                                <li>Wins</li>
                            </a>
                            <a href="#">
                                <li>Attended Events</li>
                            </a>
                            <a href="#">
                                <li>Battles</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
