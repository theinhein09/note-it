import React from "react";
import Sidebar from "../components/sidebar";
import PropTypes from "prop-types";
import { useSidebarContextUpdater } from "../contexts/sidebar-context";

const SidebarContainer = (props) => {
  const { setSelectedPage } = props;
  const { closeSidebar } = useSidebarContextUpdater();

  const handleAddPage = () => {
    setSelectedPage(null);
    closeSidebar();
  };

  return <Sidebar {...props} onAddPage={handleAddPage} />;
};

Sidebar.propTypes = {
  selectedBook: PropTypes.object,
  sections: PropTypes.object,
  setSelectedPage: PropTypes.func,
  onAddPage: PropTypes.func,
};

export default SidebarContainer;
