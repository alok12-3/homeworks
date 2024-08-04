import React, { useState } from "react";
import Navbar from "./indcomponents/Navbar";
import "./App.css"; // Import the App.css file
import Blankdiv from "./indcomponents/Blankdiv";
import { Input } from "./components/ui/input";
import QuizCard from "./components/ui/quizcard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../homeworks/src/components/ui/tabs";

function App() {
  return (
    // <div className="app-background">
    //   <Navbar />
    //   <Blankdiv />
    //   <div className="main-content">
    //     <Blankdiv />
    //   </div>
    // </div>
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default App;
