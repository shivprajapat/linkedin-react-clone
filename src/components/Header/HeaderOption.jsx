import { Avatar } from "@mui/material";
import React from "react";
import "./headerOption.css";
function HeaderOption({ Icon, title,avatar ,onClick}) {
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption_icon" />}
      {
        avatar && <Avatar className="headerOption_avatar" src={avatar} />
      }
      <h4 className="headerOption_title">{title}</h4>
    </div>
  );
}

export default HeaderOption;
