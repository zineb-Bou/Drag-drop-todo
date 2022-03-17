import React, { useReducer, createContext } from 'react';
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
  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
}
export { TodoContext, TodoContextProvider };
