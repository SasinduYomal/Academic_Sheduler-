import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Academic Scheduler
        </Typography>

        {user && (
          <>npm install @fullcalendar/core

            <Button color="inherit" component={Link} to="/">Home</Button>
            {user.role === 'admin' && (
              <>
                <Button color="inherit" component={Link} to="/admin">Dashboard</Button>
              </>
            )}
            {user.role === 'student' && (
              <>
                <Button color="inherit" component={Link} to="/student">Dashboard</Button>
              </>
            )}
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        )}

        {!user && (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
