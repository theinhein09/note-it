import React from "react";
import { GrClose } from "react-icons/gr";
import BookPreviewContainer from "../../containers/book-preview-container";

const Sidebar = (props) => {
  const { closeSidebar, selectedBook } = props;
  return (
    <>
      Sidebar
      <button onClick={closeSidebar}>
        <GrClose />
      </button>
      <BookPreviewContainer selectedBook={selectedBook} />
    </>
  );
};

export default Sidebar;
