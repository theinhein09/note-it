import React from "react";
import UserSetting from "../components/user-setting";
import useBoolean from "../hooks/useBoolean";

const UserSettingContainer = (props) => {
  const [
    userSetting,
    { toggle: toggleUserSetting, on: openUserSetting, off: closeUserSetting },
  ] = useBoolean();

  return (
    <UserSetting
      {...props}
      toggleUserSetting={toggleUserSetting}
      userSetting={userSetting}
    />
  );
};

export default UserSettingContainer;
