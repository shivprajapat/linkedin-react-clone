import React from "react";
import "./App.css";
import { Sidebar } from "./components";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body */}
      <div className="app_body">
        <Sidebar />
      </div>
      {/* ./App Body */}
    </div>
  );
}

export default App;
