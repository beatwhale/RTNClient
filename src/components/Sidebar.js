import React from 'react';
import "../styles/admin.css"

const Sidebar = ({ handleLinkClick }) => {
  return (
    <div className="sidebar" >
      <div className="links" style={{marginLeft:20, marginTop:20}}>
        <h4 onClick={() => handleLinkClick("./pages/Admin/Control", 'Управление')}>Управление БД</h4>
        <h4 onClick={() => handleLinkClick('./pages/Admin/RosAvtoDor', 'РосАвтоДор')}>РосАвтоДор</h4>
        <h4 onClick={() => handleLinkClick('./pages/Admin/RosZhelDor', 'РосЖелДор')}>РосЖелДор</h4>
        <h4 onClick={() => handleLinkClick('./pages/Admin/Users', 'Пользователи')}>Пользователи</h4>
        <h4 onClick={() => handleLinkClick('./pages/Admin/State', 'Нагрузка')}>Нагрузка</h4>
      </div>
    </div>
  );
};

export default Sidebar;
