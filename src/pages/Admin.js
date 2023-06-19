import React from "react";
import Sidebar from "../components/Sidebar";
import Control from '../pages/Admin/Control';
import RosAvtoDor from '../pages/Admin/RosAvtoDor';
import RosZhelDor from '../pages/Admin/RosZhelDor';
import State from '../pages/Admin/State';
import Users from '../pages/Admin/Users';
import "../styles/admin.css"

const Admin = () => {
  const [selectedLink, setSelectedLink] = React.useState(null);
  const [selectedContent, setSelectedContent] = React.useState(null);

  const handleLinkClick = (link, content) => {
    setSelectedLink(link);
    setSelectedContent(content);
  };

  const content = () => {
    if (selectedLink === './pages/Admin/Control') {
      return <Control />;
    } else if (selectedLink === './pages/Admin/RosAvtoDor') {
      return <RosAvtoDor />;
    } else if (selectedLink === './pages/Admin/RosZhelDor') {
      return <RosZhelDor />;
    } else if (selectedLink === './pages/Admin/Users') {
      return <Users />;
    } else if (selectedLink === './pages/Admin/State') {
      return <State />;
    }
    return null;
  };

  return (
    <div>
      <Sidebar handleLinkClick={handleLinkClick} />
      <div className="content">
        {content()}
      </div>
    </div>
  );
};

export default Admin;
