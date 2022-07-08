import React from "react";
import Sidebar from "../components/sidebar";
import PropTypes from "prop-types";

const SidebarContainer = (props) => {
  return <Sidebar {...props} />;
};

Sidebar.propTypes = {
  selectedBook: PropTypes.object,
  sections: PropTypes.object,
  setSelectedPage: PropTypes.func,
};

export default SidebarContainer;
