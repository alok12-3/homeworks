import React, { useState } from "react";
import Navbar from "./indcomponents/Navbar";
import "./App.css"; // Import the App.css file
import Blankdiv from "./indcomponents/Blankdiv";
import { Input } from "./components/ui/input";
function App() {
  return (
    <div className="app-background">
      <Navbar />
      <div className="main-content">
        <Blankdiv />
      </div>
    </div>
  );
}

export default App;
