import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SidebarContainer from "../../containers/sidebar-container";

const Layout = (props) => {
  const {
    children,
    selectedBook,
    sections,
    toggleSidebar,
    sidebar,
    closeSidebar,
  } = props;

  return (
    <>
      <button onClick={toggleSidebar}>
        {sidebar ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
      {sidebar && (
        <SidebarContainer
          closeSidebar={closeSidebar}
          selectedBook={selectedBook}
          sections={sections}
        />
      )}
      {children}
    </>
  );
};

export default Layout;
