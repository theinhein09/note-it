import React from "react";
import { GrSettingsOption } from "react-icons/gr";

const UserSetting = (props) => {
  const { userSetting, toggleUserSetting, handleSignOut } = props;

  return (
    <>
      <button onClick={toggleUserSetting}>
        <GrSettingsOption />
      </button>
      {userSetting && (
        <>
          <button>Profile</button>
          <button>Reset password</button>
          <button>Delete account</button>
          <button onClick={handleSignOut}>Sign out</button>
        </>
      )}
    </>
  );
};

export default UserSetting;
