import React from 'react'
import './style.css'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../Images/logo.png'
import HeaderOption from '../HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Header = () => {
  return (
    <div className='header'>
    <div className="header_left">
        <img src={logo} alt="" />
        <div className="header_search">
        <SearchIcon/>
        <input type="text" />
        </div>
         </div>
    

        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='My Network'/>
            <HeaderOption Icon={ChatIcon} title='My Network'/>
            <HeaderOption Icon={NotificationsIcon} title='My Network'/>
            <HeaderOption avatar='https://avatars.githubusercontent.com/u/75515360?v=4'/>
        </div>
        </div>
  )
}

export default Header