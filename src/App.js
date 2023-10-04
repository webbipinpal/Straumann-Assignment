import React from "react";
import LeftSidebar from "./component/blocks/LeftSidebar";
import MainContainer from "./component/blocks/MainContainer"

function App() {
  return(
    <div className="wrapper">
      <div className="sidebar">
        <LeftSidebar />
      </div>
      <div className="main">
        <MainContainer />
      </div>
      
      
    </div>
  );
}

export default App;
