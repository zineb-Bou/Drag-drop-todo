/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import TodoList from '../Todo_list/todoList';
import TodoForm from '../Todo_form/todoForm';
import { TodoContextProvider } from '../../utils/todoContext';
import { todoContainer } from './mainSection.css';
import TodoFooter from '../Footer/todoFooter';

export default function MainSec() {

  return (
    <div css={todoContainer}>
      <TodoContextProvider>
        <TodoForm />
        <TodoList />;
        <TodoFooter />
      </TodoContextProvider>
    </div>
  );
}
