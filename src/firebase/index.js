import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { firebaseConfig } from "./config";

class Firebase {
  constructor(firebaseConfig) {
    initializeApp(firebaseConfig);
    this.db = getFirestore();
  }

  getDocument = ({ collectionName, documentId }) =>
    getDoc(this.db, collectionName, documentId);

  setDocument = ({ collectionName, documentId, data }) =>
    setDoc(doc(this.db, collectionName, documentId), data);

  removeDocument = ({ collectionName, documentId }) =>
    deleteDoc(doc(this.db, collectionName, documentId));

  getCollection = ({ collectionName }) => {
    return getDocs(collection(this.db, collectionName));
  };
}

const fb = new Firebase(firebaseConfig);
export default fb;
