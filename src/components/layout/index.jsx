import React from "react";
import PropTypes from "prop-types";
import SidebarContainer from "../../containers/sidebar-container";

const Layout = (props) => {
  const { children, selectedBook, setSelectedBook, sections, setSelectedPage } =
    props;

  return (
    <>
      <SidebarContainer
        setSelectedBook={setSelectedBook}
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
  sections: PropTypes.object,
  setSelectedPage: PropTypes.func,
  setSelectedBook: PropTypes.func,
};

export default Layout;
