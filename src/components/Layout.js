import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  CssBaseline,
  IconButton,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListIcon from '@mui/icons-material/List';
import LogoutIcon from '@mui/icons-material/Logout';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="flex">
      <CssBaseline />
      <Drawer
        variant="permanent"
        className=" flex-shrink-0"
        classes={{ paper: "w-56"  }}
      >
        <Toolbar />
        <div className="overflow-auto ">
          <List>
            <ListItem button component={Link} to="/dashboard">
              <ListItemIcon>
                <DashboardIcon className='text-blue-500' />
              </ListItemIcon>
              <ListItemText primary="Dashboard" className='text-blue-500' />
            </ListItem>
            <ListItem button component={Link} to="/list">
              <ListItemIcon>
                <ListIcon className='text-blue-500' />
              </ListItemIcon>
              <ListItemText primary="List" className='text-blue-500' />
            </ListItem>
            {isAuthenticated && (
              <ListItem button onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon className='text-blue-500' />
                </ListItemIcon>
                <ListItemText primary="Logout" className='text-blue-500' />
              </ListItem>
            )}
          </List>
        </div>
      </Drawer>
      <main className="flex-grow bg-gray-100 p-6 ml-56">
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
