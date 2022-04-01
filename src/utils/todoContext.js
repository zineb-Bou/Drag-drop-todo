import React, { useEffect, useReducer, createContext } from 'react';
import { reducer } from './todoReducer';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../lib/auth';

const TodoContext = createContext();

// const initialState = {
//   todos: [
//     {
//       text: 'Eat apple',
//       completed: false,
//       id: 'b967afe24b23',
//     },
//     {
//       text: 'Take dog for a walk',
//       completed: true,
//       id: '43286487fhsdjasd',
//     },
//     {
//       text: 'Listen to music',
//       completed: false,
//       id: '54937fhajd',
//     },
//     {
//       text: 'Yoga setion',
//       completed: true,
//       id: '43242341aaaaa',
//     },
//     {
//       text: 'Prepare the dinner',
//       completed: true,
//       id: 'b967afe24a13',
//     },
//   ],
//   visibilityFilter: 'All',
// };

const initialState = {
  todos: [],
  visibilityFilter: 'All',
  uid: '',
};
function TodoContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  const auth = useAuth();
  //    function to retrieve the todos from firestore
  const getTodos = async () => {
    const q = query(collection(db, 'users'), where('uid', '==', auth.user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      //  doc.data() is never undefined for query doc snapshots
      dispatch({
        type: 'INITIALIZE_TODO',
        payload: {
          todos: doc.data().todos,
          uid: doc.data().uid,
        },
      });
    });
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
}
export { TodoContext, TodoContextProvider };
