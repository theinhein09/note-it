import React from "react";
import PropTypes from "prop-types";
import EditableInputContainer from "../../containers/editable-input-container";
import ButtonContainer from "../../containers/button-container";
import { CgUserRemove } from "react-icons/cg";

const ProfileTable = (props) => {
  const {
    updatedProfile,
    onNameSave,
    user,
    onEmailSave,
    onPasswordSave,
    openDialog,
  } = props;

  return (
    <table className="my-10 text-left">
      <caption className="text-left">Profile</caption>
      <tbody>
        <tr>
          <th className="pr-8">Username</th>
          <td>
            <EditableInputContainer
              content={updatedProfile.displayName || user.displayName}
              onSave={onNameSave}
              id={user.uid}
              customClassName="min-w-full"
            />
          </td>
        </tr>
        <tr>
          <th>Email</th>
          <td>
            <EditableInputContainer
              content={updatedProfile.email || user.email}
              onSave={onEmailSave}
              id={user.uid}
              customClassName="min-w-full"
            />
          </td>
        </tr>
        <tr>
          <th>Change Password</th>
          <td>
            <EditableInputContainer
              onSave={onPasswordSave}
              content=""
              id={user.uid}
              customClassName="min-w-full"
              type="password"
            />
          </td>
        </tr>
      </tbody>
      <tfoot className="my-5 flex">
        <tr>
          <td>
            <ButtonContainer
              label="Delete Account"
              icon={<CgUserRemove />}
              onClick={openDialog}
            />
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

ProfileTable.propTypes = {
  updatedProfile: PropTypes.object,
  onNameSave: PropTypes.func,
  user: PropTypes.object,
  onEmailSave: PropTypes.func,
  onPasswordSave: PropTypes.func,
  openDialog: PropTypes.func,
};

export default ProfileTable;
