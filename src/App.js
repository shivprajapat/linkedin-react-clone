import React from "react";
import "./App.css";
import { Feed, Sidebar } from "./components";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body */}
      <div className="app_body">
        <Sidebar />
        <Feed/>
      </div>
      {/* ./App Body */}
    </div>
  );
}

export default App;
