import { getFirestore, doc, setDoc } from "firebase/firestore";

import app from "..";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

class FireStore {
  constructor(collection) {
    this.collection = collection;
  }

  setDoc = async (data, id) => {
    const ref = doc(db, this.collection, id);
    await setDoc(ref, data);
  };
}

export default FireStore;
