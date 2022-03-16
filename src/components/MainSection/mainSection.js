/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import TodoList from '../Todo_list/todoList';
import TodoForm from '../Todo_form/TodoForm';
import { TodoContextProvider } from '../../utils/todoContext';
import { todoContainer } from './mainSection.css';

export default function MainSec() {
  return (
    <div css={todoContainer}>
      <TodoContextProvider>
        <TodoForm />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}
