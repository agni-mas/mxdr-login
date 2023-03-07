import React, { FC } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

interface Header { }

const Header: FC<Header> = () => {
  let location = useLocation();

  const names = {
    '/AnalystDash': 'Tom',
    '/EngineerDash': 'Alex',
    '/AdminDash': 'Admin',
  }
  return (
    <header className="header">
      <h1 className='title'>Managed Security Services</h1>
      <input className='search-bar' type="text" title='search-bar' placeholder='Search for accounts, incidents, requests, and more... ' />
      <div className='buttons'>
        <Button color='secondary' variant="outlined" sx={{ marginRight: '40px' }}>CSS Experience</Button>
        <IconButton color='secondary' aria-label="settings">
          <SettingsIcon />
        </IconButton>
        <IconButton color='secondary' aria-label="notifications">
          <NotificationsIcon />
        </IconButton>
        <Button color='secondary' variant="outlined" startIcon={<PersonIcon />} sx={{ marginLeft: '10px' }}>
          {names[location.pathname]}
        </Button>
      </div>
    </header>
  )
}

export default Header;
