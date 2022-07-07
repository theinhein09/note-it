import React from "react";
import { VscSettingsGear } from "react-icons/vsc";
import ButtonContainer from "../../containers/button-container";

const UserSetting = (props) => {
  const { userSetting, toggleUserSetting, handleSignOut } = props;

  return (
    <>
      <ButtonContainer
        onClick={toggleUserSetting}
        icon={<VscSettingsGear title="User Settings" />}
        category="icon-only"
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
