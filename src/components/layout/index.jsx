import React from "react";
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

export default Layout;
