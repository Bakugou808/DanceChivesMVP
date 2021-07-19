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
    let { userID } = useParams();
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
    // useEffect(() => {
    //     userID && grabUserIDFromUrl(userID);
    // }, [userID]);

    return (
        <div class="container">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img
                                    src="https://bulma.io/images/placeholders/96x96.png"
                                    alt="Placeholder image"
                                />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                        </div>
                    </div>

                    <div class="content">
                        Add a description with your own
                        <a href="#"> #ownedtag</a>
                        <br />
                        <ul>
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
