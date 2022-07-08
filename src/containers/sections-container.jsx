import React from "react";
import Sections from "../components/sections";
import PropTypes from "prop-types";

const SectionsContainer = (props) => {
  const { setSelectedPage } = props;

  const openPage = (page) => (event) => {
    setSelectedPage(page);
  };

  return <Sections {...props} openPage={openPage} />;
};

SectionsContainer.propTypes = {
  sections: PropTypes.object,
  openPage: PropTypes.func,
  setSelectedPage: PropTypes.func,
};

export default SectionsContainer;
