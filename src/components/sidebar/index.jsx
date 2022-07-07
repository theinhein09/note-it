import React from "react";
import { GrClose } from "react-icons/gr";
import UserSettingContainer from "../../containers/user-setting-container";

const Sidebar = (props) => {
  const { closeSidebar, children } = props;
  return (
    <>
      <h1>noteIt</h1>
      <UserSettingContainer />
      <button onClick={closeSidebar}>
        <GrClose />
      </button>
      {children}
    </>
  );
};

export default Sidebar;
