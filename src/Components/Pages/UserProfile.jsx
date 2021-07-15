import React from 'react';

const UserProfile = () => {
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
                            <p class="subtitle is-6">@johnsmith</p>
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
                                <li>Battles</li>{' '}
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
