import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  query,
  onSnapshot,
  deleteDoc,
  updateDoc,
  where,
  getDocs,
  getDoc,
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
    await setDoc(ref, data, { merge: true });
  };

  addDoc = async (data) => {
    const ref = collection(db, this.collection);
    const doc = await addDoc(ref, data);
    return doc;
  };

  onSnapshot = (set) => {
    const q = this.query();
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      set(data);
    });
    return unsubscribe;
  };

  deleteDoc = async (id) => {
    const ref = doc(db, this.collection, id);
    await deleteDoc(ref);
  };

  updateDoc = async (data, id) => {
    const ref = doc(db, this.collection, id);
    await updateDoc(ref, data);
  };

  query = (prop = null, operator = null, value = null) => {
    const ref = collection(db, this.collection);
    if (prop && operator && value)
      return query(ref, where(prop, operator, value));
    return query(ref);
  };

  getDocs = async (prop, operator, value) => {
    const q = this.query(prop, operator, value);
    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  };

  getDoc = async (id) => {
    const ref = doc(db, this.collection, id);
    const docSnap = await getDoc(ref);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }

    return null;
  };
}

export default FireStore;
