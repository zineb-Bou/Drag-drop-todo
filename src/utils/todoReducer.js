import { db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../lib/auth';

export const reducer = (state, action) => {
  //Passing our new todo if it is provided or passing undefined object
  const { id, text } = action.payload || { id: undefined, text: undefined };
  // This is our state that we are passing througn the whole app{todo,visibilityFilter}
  const { todos, visibilityFilter } = state;
  switch (action.type) {
    case 'INITIALIZE_TODO':
      return { todos: action.payload.todos, visibilityFilter };
    case 'ADD_TODO': {
      const todo = [
        {
          id: Math.random().toString(16).substring(2),
          completed: false,
          text,
        },
        ...todos,
      ];
      const todoDocRef = doc(db, 'users', 'OWxS1c8ygXcwLWUn4AS1eihBJ9a2');
      setDoc(todoDocRef, { todos: todo, uid: 'OWxS1c8ygXcwLWUn4AS1eihBJ9a2' });
      return {
        todos: todo,
        visibilityFilter,
      };
    }
    case 'DELETE_TODO': {
      const todo = todos.filter((todo) => todo.id !== id);
      const todoDocRef = doc(db, 'users', 'OWxS1c8ygXcwLWUn4AS1eihBJ9a2');
      setDoc(todoDocRef, { todos: todo, uid: 'OWxS1c8ygXcwLWUn4AS1eihBJ9a2' });
      return {
        todos: todo,
        visibilityFilter,
      };
    }
    case 'COMPLETE_TODO': {
      const todo = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      const todoDocRef = doc(db, 'users', 'OWxS1c8ygXcwLWUn4AS1eihBJ9a2');
      setDoc(todoDocRef, { todos: todo, uid: 'OWxS1c8ygXcwLWUn4AS1eihBJ9a2' });
      return {
        todos: todo,
        visibilityFilter,
      };
    }
    // case 'COMPLETE_ALL': {
    //   const areAllMarked = todos.every((todo) => todo.completed);
    //   const result = {
    //     todos: todos.map((todo) => ({ ...todo, completed: !areAllMarked })),
    //     visibilityFilter,
    //   };
    //   return result;
    // }
    case 'CLEAR_COMPLETED': {
      const todo = todos.filter((t) => t.completed === false);
      const todoDocRef = doc(db, 'users', 'OWxS1c8ygXcwLWUn4AS1eihBJ9a2');
      setDoc(todoDocRef, { todos: todo, uid: 'OWxS1c8ygXcwLWUn4AS1eihBJ9a2' });
      return {
        todos: todo,
        visibilityFilter,
      };
    }
    // case 'CLEAR_ALL':
    //   return {
    //     todos: [],
    //     visibilityFilter,
    //   };

    case 'SET_VISIBILITY':
      return {
        todos: [...todos],
        visibilityFilter: action.payload.visibilityFilter,
      };
    case 'SET_TODOS':
      return {
        todos: [...action.payload.todos],
        visibilityFilter,
      };
    default:
      return state;
  }
};
