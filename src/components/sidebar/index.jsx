import React from "react";
import { GrClose } from "react-icons/gr";

const Sidebar = (props) => {
  const { closeSidebar } = props;
  return (
    <>
      Sidebar
      <button onClick={closeSidebar}>
        <GrClose />
      </button>
    </>
  );
};

export default Sidebar;
