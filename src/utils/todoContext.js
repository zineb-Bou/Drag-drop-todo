import React, { useEffect, useReducer, createContext, useState } from 'react';
import { reducer } from './todoReducer';

const TodoContext = createContext();

const initialState = {
  todos: [
    {
      text: 'Eat apple',
      completed: false,
      id: 'b967afe24b23',
    },
    {
      text: 'Take dog for a walk',
      completed: true,
      id: '43286487fhsdjasd',
    },
    {
      text: 'Listen to music',
      completed: false,
      id: '54937fhajd',
    },
    {
      text: 'Yoga setion',
      completed: true,
      id: '43242341aaaaa',
    },
    {
      text: 'Prepare the dinner',
      completed: true,
      id: 'b967afe24a13',
    },
  ],
  visibilityFilter: 'All',
};

function TodoContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  // const userData = async () => {
  //   const q = query(collection(db, 'initialState'));

  //   const querySnapshot = await getDocs(q);
  //   const data = querySnapshot.docs.map((doc) => ({
  //     // doc.data() is never undefined for query doc snapshots
  //     ...doc.data(),
  //     id: doc.id,
  //   }));
  //   setinitialState(data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   userData();
  // }, []);
  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
}
export { TodoContext, TodoContextProvider };
