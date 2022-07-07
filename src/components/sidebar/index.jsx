import React from "react";
import UserSettingContainer from "../../containers/user-setting-container";

const Sidebar = (props) => {
  const { children } = props;
  return (
    <>
      <h1>noteIt</h1>
      <UserSettingContainer />

      {children}
    </>
  );
};

export default Sidebar;
