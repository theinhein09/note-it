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
          <>Profile</>
          <>Reset password</>
          <>Delete account</>
          <button onClick={handleSignOut}>Sign out</button>
        </>
      )}
    </>
  );
};

export default UserSetting;
