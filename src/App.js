import React, { useEffect } from "react";
import "./App.css";
import { Feed, Sidebar } from "./components/Body";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
        // user is logged out
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <Header />

      <Container maxWidth="lg">
        {!user ? (
          <Login />
        ) : (
          <div className="app_body">
            <Sidebar />
            <Feed />
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
