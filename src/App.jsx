import { useState } from 'react';
import { BiCommentDetail } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { IoMdShareAlt } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { PiVideoLight } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import './App.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo"><FaFacebookF /></div>
      <div className="navbar-links">
        <a href="#"><RiHome2Line /></a>
        <a href="#"><PiVideoLight /></a>
        <a href="#"><HiUserGroup /></a>
        <a href="#"><IoIosNotificationsOutline /></a>
      </div>
      <div className="navbar-profile">
        <img 
          src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/352562397_792818745966368_2035257427470383808_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFSZ_joFb0CvbgyjLpHoOhBhlBszkfC-SiGUGzOR8L5KNTaHfbYqxT6WMb4v_HsF2fc8_tisyVpiwqw-NIjnj8B&_nc_ohc=vPYs65KxVxMQ7kNvgG3dkph&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=ArKVS-O00EvcQKT3lugMaKK&oh=00_AYCo_QHGT9F8wFVPclueiUyfsquK3SnVxJjZj5OpDrhk1A&oe=6721E01D" 
          alt="Profile" 
        />
      </div>
    </div>
  );
}

function Post() {
  return (
    <div className='main'>
      <div className="post-container">
        <div className="post-header">
          <div className="post-user-detail">
            <img 
              src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/352562397_792818745966368_2035257427470383808_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFSZ_joFb0CvbgyjLpHoOhBhlBszkfC-SiGUGzOR8L5KNTaHfbYqxT6WMb4v_HsF2fc8_tisyVpiwqw-NIjnj8B&_nc_ohc=vPYs65KxVxMQ7kNvgG3dkph&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=ArKVS-O00EvcQKT3lugMaKK&oh=00_AYCo_QHGT9F8wFVPclueiUyfsquK3SnVxJjZj5OpDrhk1A&oe=6721E01D" 
              alt="Muhammad Kabeer"
              className="dp"
              id="my-id"
            />
            <div>
              <h3>Muhammad Kabeer</h3>
              <span>49 min ago</span>
            </div>
          </div>
          <SlOptions />
        </div>
        <p>𝑴𝒚 𝒏𝒆𝒘 𝒑𝒐𝒔𝒕 📸✨</p>
        <img 
          src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/352562397_792818745966368_2035257427470383808_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFSZ_joFb0CvbgyjLpHoOhBhlBszkfC-SiGUGzOR8L5KNTaHfbYqxT6WMb4v_HsF2fc8_tisyVpiwqw-NIjnj8B&_nc_ohc=vPYs65KxVxMQ7kNvgG3dkph&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=ArKVS-O00EvcQKT3lugMaKK&oh=00_AYCo_QHGT9F8wFVPclueiUyfsquK3SnVxJjZj5OpDrhk1A&oe=6721E01D" 
          alt="Post" 
          className="post-photo" 
          id="my-id"
        />
        <div className="react">
          <FcLike /> 
          <BiCommentDetail /> 
          <IoMdShareAlt /> 
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div className="post-list">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}

export default App;
