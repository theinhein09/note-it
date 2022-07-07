import React from "react";
import { useNavigate } from "react-router-dom";
import UserSetting from "../components/user-setting";
import useBoolean from "../hooks/useBoolean";
import { useUserContextUpdater } from "../contexts/user-context";

const UserSettingContainer = (props) => {
  const navigate = useNavigate();
  const setUser = useUserContextUpdater();
  const [
    userSetting,
    { toggle: toggleUserSetting, on: openUserSetting, off: closeUserSetting },
  ] = useBoolean();

  const handleSignOut = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <UserSetting
      {...props}
      toggleUserSetting={toggleUserSetting}
      userSetting={userSetting}
      handleSignOut={handleSignOut}
    />
  );
};

export default UserSettingContainer;
