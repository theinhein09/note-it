import React from "react";
import { GrClose } from "react-icons/gr";

const Sidebar = (props) => {
  const { closeSidebar, children } = props;
  return (
    <>
      Sidebar
      <button onClick={closeSidebar}>
        <GrClose />
      </button>
      {children}
    </>
  );
};

export default Sidebar;
