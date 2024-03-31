import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Person from '../../Images/avatar.png'


const Navbar = () => {


  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="welcome">
            <p>Welcome to Dashboard</p>
        </div>




        <div className="items">

        <div className="search">
        <input type="text" placeholder="Search" style={{ color: '#e2d8fd' }} />
          <i className="fas fa-search icon" style={{ color: '#e2d8fd' }}></i>
        </div>

            <div className="item">
            <NotificationsOutlinedIcon className='icon'/>
            </div>

            <div className="avatar">
                    <img src={Person} alt="" width={'50px'} style={{marginTop:'20px', border:' 1px solid rgba(217, 203, 255, 0.4)', borderRadius:'50px', marginLeft:'10px', cursor:'pointer'}} />
            </div>
            
        </div>

      </div>
    </div>
  );
};

export default Navbar;
