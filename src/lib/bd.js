import { getFirestore } from '@firebase/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';

const db = getFirestore();

export function createUser(uid, data) {
  // Add a new document with a generated id
  const user = doc(collection(db, 'users'), uid);
  // later...
  setDoc(user, { uid, ...data }, { merge: true });
}
