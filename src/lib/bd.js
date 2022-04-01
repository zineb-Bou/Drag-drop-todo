import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export function createUser(uid) {
  // Add a new document with a generated id
  const user = doc(collection(db, 'users'), uid);
  setDoc(user, { uid, todos: [] }, { merge: true });
}
