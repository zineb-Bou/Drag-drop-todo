import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export function createUser(uid, data) {
  // Add a new document with a generated id
  const user = doc(collection(db, 'users'), uid);
  // later...
  setDoc(user, { uid, ...data }, { merge: true });
}
