import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ButtonContainer from "../../containers/button-container";
import SidebarContainer from "../../containers/sidebar-container";

const Layout = (props) => {
  const {
    children,
    selectedBook,
    sections,
    toggleSidebar,
    sidebar,
    closeSidebar,
    setSelectedPage,
  } = props;

  return (
    <>
      <ButtonContainer
        onClick={toggleSidebar}
        icon={sidebar ? <FaChevronLeft /> : <FaChevronRight />}
      />
      {sidebar && (
        <SidebarContainer
          closeSidebar={closeSidebar}
          selectedBook={selectedBook}
          sections={sections}
          setSelectedPage={setSelectedPage}
        />
      )}
      {children}
    </>
  );
};

export default Layout;
