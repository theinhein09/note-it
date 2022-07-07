import React from "react";
import { GrSettingsOption } from "react-icons/gr";

const UserSetting = (props) => {
  const { userSetting, toggleUserSetting } = props;

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
          <>Sign out</>
        </>
      )}
    </>
  );
};

export default UserSetting;
