import React from 'react';
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

// Nested Components
const ProfileDetails = () => <div><h3>Profile Details</h3><p>Your detailed profile information.</p></div>;
const ProfileSettings = () => <div><h3>Profile Settings</h3><p>Update your profile settings here.</p></div>;

// Main Profile Component
const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
      {/* Outlet renders nested routes */}
      <Outlet />
    </div>
  );
};

// Dynamic User Component
const User = () => {
  const { id } = useParams();
  return <div><h3>User ID: {id}</h3></div>;
};

export { Profile, ProfileDetails, ProfileSettings, User };
