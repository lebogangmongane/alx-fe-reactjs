import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: '#333',
            color: '#fff'
          }}>
            <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', marginRight: '10px' }}>About</Link>
            <Link to="/services" style={{ color: 'white', marginRight: '10px' }}>Services</Link>
            <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
        </nav>
    );
}

export default Navbar;
