import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // adjust path as needed

function Navbar() {
  const navigate = useNavigate();
  const { role, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Academic Scheduler</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/courses" style={styles.link}>Courses</Link>
        {role === 'admin' && <Link to="/admin" style={styles.link}>Admin Panel</Link>}
        {role === 'faculty' && <Link to="/faculty" style={styles.link}>Faculty</Link>}
        {role === 'student' && <Link to="/schedule" style={styles.link}>My Schedule</Link>}
        {!role && <Link to="/register" style={styles.link}>Register</Link>}
        {!role && <Link to="/login" style={styles.link}>Login</Link>}
        {role && <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#007bff',
    color: '#fff',
    flexWrap: 'wrap'
  },
  logo: {
    margin: 0
  },
  links: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px'
  },
  logoutBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default Navbar;
