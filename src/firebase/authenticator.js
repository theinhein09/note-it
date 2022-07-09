import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import app from ".";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

class Authenticator {
  static _createUserWithEmailAndPassword = async (email, password, profile) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    this._sendEmailVerification(user);
    this._updateProfile(user, profile);
    return user;
  };

  static _sendEmailVerification = async (user) => {
    await sendEmailVerification(user);
  };

  static _updateProfile = async (user, profile) => {
    await updateProfile(user, profile);
  };
}

export default Authenticator;
