import React from "react";
import Layout from "../components/layout";

const LayoutContainer = (props) => {
  const { children, selectedBook, sections, setSelectedPage } = props;

  return (
    <Layout
      {...props}
      children={children}
      selectedBook={selectedBook}
      sections={sections}
      setSelectedPage={setSelectedPage}
    />
  );
};

export default LayoutContainer;
