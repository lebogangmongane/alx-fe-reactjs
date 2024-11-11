// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext';

function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return (
        <UserContext.Provider value={userData}>
            <ProfilePage />
        </UserContext.Provider>
    );
}

export default App;