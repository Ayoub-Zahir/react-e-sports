import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            E-Sports
          </Typography>

          <Button
            variant="outlined"
            color="inherit"
            style={{ marginRight: '1rem' }}
          >
            <Link to="/leagues" style={linkStyle}>
              Leagues
            </Link>
          </Button>

          <Button variant="outlined" color="inherit">
            <Link to="/teams" style={linkStyle}>
              Teams
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
