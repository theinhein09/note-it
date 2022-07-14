import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  deleteUser,
  updateEmail,
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

  static _signInWithEmailAndPassword = async (email, password) => {
    await this._setPersistence();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  };

  static _setPersistence = async () => {
    await setPersistence(auth, browserSessionPersistence);
  };

  static _onAuthStateChanged = (setUser, startLoading, finishLoading) => {
    startLoading();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        finishLoading();
      } else {
        setUser(null);
        finishLoading();
      }
    });
  };

  static _signOut = async () => {
    await signOut(auth);
  };

  static _sendPasswordResetEmail = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };

  static _updatePassword = async (password) => {
    await updatePassword(auth.currentUser, password);
  };

  static _deleteUser = async () => {
    await deleteUser(auth.currentUser);
  };

  static _updateEmail = async (email) => {
    await updateEmail(auth.currentUser, email);
  };
}

export default Authenticator;
