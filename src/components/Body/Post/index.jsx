import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./style.css";
import InputOption from "../Feed/InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";

const Post = forwardRef(({ name, description, message, photoUrl },ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl} alt={name} />
        <div className="post_info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatIcon} title="comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
