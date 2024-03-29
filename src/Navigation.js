// import { Navigate, NavLink } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useContext } from "react";
import userContext from "./userContext";
import { useNavigate } from "react-router-dom";
import uniqueId from "lodash/uniqueId";
import { Link } from "react-router-dom";

const pages = ['Companies', 'Jobs'];
const linkStyle = { textDecoration: "none", color: "inherit" };

function Navigation({ logout }) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user } = useContext(userContext);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HandshakeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to="/" style={linkStyle}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Jobly
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {user && pages.map((page) => (
                <MenuItem key={uniqueId()} onClick={handleCloseNavMenu}>
                  <Link to={`/${page.toLowerCase()}`} style={linkStyle} >
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <HandshakeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Link to="/" style={linkStyle}>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Jobly
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {user && pages.map((page) => (
              <Link key={uniqueId()} to={`/${page.toLowerCase()}`} style={linkStyle}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user ?
                <div className="logged-in-items">
                  <MenuItem key={uniqueId()} onClick={handleCloseUserMenu}>
                    <Link to={`/profile`} style={linkStyle} >
                      <Typography textAlign="center">Profile</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem key={uniqueId()} onClick={() => {
                    handleCloseUserMenu();
                    logout();
                    navigate("/");
                  }}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </div>
                : <div>
                  <MenuItem key={uniqueId()} onClick={handleCloseUserMenu}>
                    <Link to={`/login`} style={linkStyle} >
                      <Typography textAlign="center">Login</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem key={uniqueId()} onClick={handleCloseUserMenu}>
                    <Link to={`/signup`} style={linkStyle} >
                      <Typography textAlign="center">Signup</Typography>
                    </Link>
                  </MenuItem>
                </div>}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default Navigation;