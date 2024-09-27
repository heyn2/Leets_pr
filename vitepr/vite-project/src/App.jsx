import React from "react";
import Sidebar from "./components/Sidebar.jsx"; // Sidebar 컴포넌트
import Feed from "./components/Feed.jsx";       // Feed 컴포넌트
import Widgets from "./components/Widgets.jsx"; // Widgets 컴포넌트
import "./App.css";

function App() {
  return (
    <div className="app flex">
      {/* Sidebar */}
      <Sidebar className="w-1/4" />


      {/* Feed */}
      <Feed className="w-2/4" />

      {/* Widgets (트렌드 섹션) */}
      <Widgets className="w-1/4" />
    </div>
  );
}

export default App;
