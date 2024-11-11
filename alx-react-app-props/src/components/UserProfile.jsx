// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
    // Access user data directly from context
    const userData = useContext(UserContext);

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserDetails;
