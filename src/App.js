import React from "react";
import "./App.css";
import { Feed, Sidebar } from "./components/Body";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="app">
      <Header />
      <Container maxWidth="lg">
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      </Container>
    </div>
  );
}

export default App;
