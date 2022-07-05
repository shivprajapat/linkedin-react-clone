import React, { useState, useEffect } from "react";
import "./feed.css";
import { InputOption, Post } from "../index";
import EditIcon from "@mui/icons-material/Edit";
import ImageIcon from "@mui/icons-material/Image";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventNoteIcon from "@mui/icons-material/EventNote";
const Feed = () => {
  const [input, setInput] = useState("");

  useEffect(() => {}, []);
  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <EditIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_Option">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={OndemandVideoIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={CalendarTodayIcon} title="Event" color="#c0cdcd" />
          <InputOption
            Icon={EventNoteIcon}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>
      {/* Post */}
      <Post name="shiv" description="this is test comment" message="Wow" />
      {/* ./Post */}
    </div>
  );
};

export default Feed;
