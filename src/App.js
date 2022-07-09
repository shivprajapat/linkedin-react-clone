import React from "react";
import "./App.css";
import { Feed, Sidebar } from "./components/Body";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

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
