/* eslint-disable no-unused-vars */
import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#333',
      color: '#fff'
    }}>
      <h1 style={{ margin: 0 }}>My Company</h1>
      <ul style={{
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0
      }}>
        <li style={{ margin: '0 1rem' }}><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
        <li style={{ margin: '0 1rem' }}><a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
        <li style={{ margin: '0 1rem' }}><a href="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a></li>
        <li style={{ margin: '0 1rem' }}><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
