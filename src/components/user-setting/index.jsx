import React from "react";
import PropTypes from "prop-types";
import { CgUser, CgUserRemove } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";
import ButtonContainer from "../../containers/button-container";

const UserSetting = (props) => {
  const { userSetting, toggleUserSetting, onSignOut, onProfileOpen } = props;

  return (
    <div className="relative">
      <ButtonContainer
        onClick={toggleUserSetting}
        icon={<VscSettingsGear title="User Settings" />}
        category="icon-only"
      />
      {userSetting && (
        <div
          className="absolute bottom-full z-20 flex min-w-max flex-col bg-white text-black"
          role="presentation"
        >
          <ButtonContainer
            label="Profile"
            icon={<CgUser />}
            onClick={onProfileOpen}
          />
          <ButtonContainer label="Delete account" icon={<CgUserRemove />} />
          <ButtonContainer
            label="Sign out"
            onClick={onSignOut}
            icon={<RiLogoutBoxLine />}
          />
        </div>
      )}
    </div>
  );
};

UserSetting.propTypes = {
  userSetting: PropTypes.bool,
  toggleUserSetting: PropTypes.func,
  onSignOut: PropTypes.func,
  onProfileOpen: PropTypes.func,
};

export default UserSetting;
