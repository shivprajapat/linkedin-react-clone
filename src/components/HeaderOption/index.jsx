import { Avatar } from "@mui/material";
import React from "react";
import "./style.css";
function HeaderOption({ Icon, title,avatar }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {
        avatar && <Avatar className="headerOption_avatar" src={avatar} />
      }
      <h4 className="headerOption_title">{title}</h4>
    </div>
  );
}

export default HeaderOption;
