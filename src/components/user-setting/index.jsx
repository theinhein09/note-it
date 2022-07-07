import React from "react";
import { GrSettingsOption } from "react-icons/gr";
import ButtonContainer from "../../containers/button-container";

const UserSetting = (props) => {
  const { userSetting, toggleUserSetting, handleSignOut } = props;

  return (
    <>
      <ButtonContainer
        onClick={toggleUserSetting}
        icon={<GrSettingsOption />}
      />
      {userSetting && (
        <>
          <ButtonContainer label="Profile" />
          <ButtonContainer label="Reset password" />
          <ButtonContainer label="Delete account" />
          <ButtonContainer label="Sign out" onClick={handleSignOut} />
        </>
      )}
    </>
  );
};

export default UserSetting;
