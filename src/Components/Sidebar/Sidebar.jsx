import React from 'react';
import './Sidebar.css'

const Sidebar = ({
  children,
}) => {
  return (
    <div className="Sidebar">
      {children}
    </div>
  ) 
}

export default Sidebar;