import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  query,
  onSnapshot,
} from "firebase/firestore";

import app from ".";

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

  addDoc = async (data) => {
    const ref = collection(db, this.collection);
    const doc = await addDoc(ref, data);
    return doc;
  };

  onSnapshot = (set) => {
    const q = query(collection(db, this.collection));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      set(data);
    });
    return unsubscribe;
  };
}

export default FireStore;
