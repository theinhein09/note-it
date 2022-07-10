import { getFirestore, doc, setDoc } from "firebase/firestore";

import app from "..";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

class FireStore {
  constructor(collection) {
    this.collection = collection;
  }

  setWithConverter = async (data, converter, id) => {
    const ref = doc(db, this.collection, id).withConverter(converter);
    await setDoc(ref, data);
  };
}

export default FireStore;
