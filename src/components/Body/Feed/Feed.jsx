import React, { useState,useEffect } from "react";
import "./feed.css";
import { InputOption, Post } from "../index";
import EditIcon from "@mui/icons-material/Edit";
import ImageIcon from "@mui/icons-material/Image";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { db } from '../../../firebase';
import firebase from 'firebase';
const Feed = () => {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ))
  }, [])
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "shiv",
      description: "this is a new description",
      message: input,
      photoUrl:  '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <EditIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
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
      {posts.map(({ id, data: { name, description, message, photoUrl}}) => (
          <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      {/* ./Post */}
    </div>
  );
};

export default Feed;
