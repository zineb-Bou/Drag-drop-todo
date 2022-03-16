/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import TodoElement from '../Todo_element/todoElement';
import { useContext } from 'react';
import { TodoContext } from '../../utils/todoContext';

export const getFilteredTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'All':
      return todos;
    case 'Completed':
      return todos.filter((t) => t.completed);
    case 'Active':
      return todos.filter((t) => !t.completed);
    default:
      throw new Error(`Unknown filter: ${visibilityFilter}`);
  }
};

export default function TodoList() {
  const { state } = useContext(TodoContext);
  const { todos, visibilityFilter } = state;
  return (
    <ul
      role="list"
      css={css`
        width: 90%;
        max-width: 450px;
        border-radius: 5px;
        overflow: hidden;
      `}
    >
      {getFilteredTodos(todos, visibilityFilter).map((todo, index) => (
        <TodoElement todo={todo} />
      ))}
    </ul>
  );
}
