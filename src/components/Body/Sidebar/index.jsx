import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import "./style.css";
const Sidebar = () => {
  const user =useSelector(selectUser);
  console.log('user :>> ', user);
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <Avatar className="sidebar_avatar" src={user.photoURL} />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">25.30</p>
        </div>
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">25.30</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software")}
        {recentItem("javascript")}
        {recentItem("html")}
      </div>
    </div>
  );
};

export default Sidebar;
