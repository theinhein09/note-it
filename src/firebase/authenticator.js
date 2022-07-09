import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
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
    await this._setPersistence(email, password);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  };

  static _setPersistence = async (email, password) => {
    await setPersistence(auth, browserSessionPersistence);
  };

  static _onAuthStateChanged = (user, setUser, startLoading, finishLoading) => {
    startLoading();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
        finishLoading();
      } else {
        setUser(null);
        finishLoading();
      }
    });
  };
}

export default Authenticator;
