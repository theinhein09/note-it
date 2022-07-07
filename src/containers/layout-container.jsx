import React from "react";
import Layout from "../components/layout";
import {
  useSidebarContextState,
  useSidebarContextUpdater,
} from "../contexts/sidebar-context";

const LayoutContainer = (props) => {
  const { children, selectedBook, sections } = props;
  const sidebar = useSidebarContextState();
  const { toggleSidebar } = useSidebarContextUpdater();

  return (
    <Layout
      {...props}
      sidebar={sidebar}
      children={children}
      toggleSidebar={toggleSidebar}
      selectedBook={selectedBook}
      sections={sections}
    />
  );
};

export default LayoutContainer;
