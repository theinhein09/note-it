import React from "react";
import Sidebar from "../components/sidebar";

const SidebarContainer = (props) => {
  const { closeSidebar } = props;

  return <Sidebar {...props} />;
};

export default SidebarContainer;
