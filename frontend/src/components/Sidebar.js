import React from "react";
import '../css/sidebar.css'


const Sidebar = () => {
  return (
    <>
  
    <div className="parentSidebar">
      <h2 className="outsource">OutsourcePro</h2>
      <div className="sidebar">
        <a className="sidebarLink" href="#home">Home</a>
        <a className="sidebarLink" href="#news">Projects</a>
        <a className="sidebarLink" href="#contact">Settings</a>
        <a className="sidebarLink" href="#about">About</a>
      </div>
    </div>
    
  
</>

  );
};

export default Sidebar;
