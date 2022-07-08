import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";

const LayoutContainer = (props) => {
  return <Layout {...props} />;
};

LayoutContainer.propTypes = {
  children: PropTypes.node,
  selectedBook: PropTypes.object,
  sections: PropTypes.object,
  setSelectedPage: PropTypes.func,
};

export default LayoutContainer;
