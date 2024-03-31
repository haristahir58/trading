import React from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo"></span>
        </Link>
      </div>

      <div className="center">
      <ul style={{ lineHeight: '29px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>



          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
            <OtherHousesOutlinedIcon className='icon'/>

            </li>
          </Link>

          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <li>
            <DonutSmallOutlinedIcon className='icon'/>
            </li>
          </Link>


          <Link to="/Orders" style={{ textDecoration: 'none' }}>
            <li>
            <ShoppingBagOutlinedIcon className='icon'/>
            </li>
          </Link>


          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
            <SettingsOutlinedIcon className='icon'/>
            </li>
          </Link>       

        </ul>
      </div>

      <div className="bottom">
      <ul style={{ lineHeight: '29px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

      <Link to={"/admin/logout"}  style={{textDecoration:"none"}}>
            <li>  
                <LogoutOutlinedIcon className="icon" style={{alignSelf:'flex-end'}}/>
            </li>
         </Link>
         
         </ul>
      </div>
               

    </div>
  );
};

export default Sidebar;
