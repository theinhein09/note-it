import React from "react";
import PropTypes from "prop-types";
import SidebarContainer from "../../containers/sidebar-container";

const Layout = (props) => {
  const { children, selectedBook, sections, setSelectedPage } = props;

  return (
    <>
      <SidebarContainer
        selectedBook={selectedBook}
        sections={sections}
        setSelectedPage={setSelectedPage}
      />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  selectedBook: PropTypes.object,
  sections: PropTypes.array,
  setSelectedPage: PropTypes.func,
};

export default Layout;
