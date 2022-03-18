/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import TodoElement from '../Todo_element/todoElement';
import { useContext } from 'react';
import { TodoContext } from '../../utils/todoContext';
import { todoListWrapper } from './todoList.css';

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
    <ul role="list" css={todoListWrapper}>
      {getFilteredTodos(todos, visibilityFilter).map((todo, index) => (
        <TodoElement key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
