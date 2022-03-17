export const reducer = (state, action) => {
  //passing our new todo is here, if it is provided or passing undefined object
  const { id, text } = action.payload || { id: undefined, text: undefined };
  // this is our state that we are passing througn the whole app{todo,visibilityFilter}
  const { todos, visibilityFilter } = state;
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          {
            id: Math.random().toString(16).substring(2),
            completed: false,
            text,
          },
          ...todos,
        ],
        visibilityFilter,
      };
    case 'DELETE_TODO':
      return {
        todos: todos.filter((todo) => todo.id !== id),
        visibilityFilter,
      };

    case 'COMPLETE_TODO':
      return {
        todos: todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
        visibilityFilter,
      };
    case 'COMPLETE_ALL': {
      const areAllMarked = todos.every((todo) => todo.completed);
      const result = {
        todos: todos.map((todo) => ({ ...todo, completed: !areAllMarked })),
        visibilityFilter,
      };
      console.log(result);
      return result;
    }
    case 'CLEAR_COMPLETED':
      return {
        todos: todos.filter((t) => t.completed === false),
        visibilityFilter,
      };
    case 'CLEAR_ALL':
      return {
        todos: [],
        visibilityFilter,
      };
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
