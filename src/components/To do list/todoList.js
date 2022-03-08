/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import TodoElement from '../To do element/todoElement';
import TodoInput from '../To do input/todoInput';
import { todoContainer } from './todoList.css';

export default function TodoList() {
  return (
    <div css={todoContainer}>
      <TodoInput />
      <div
        css={css`
          width: 90%;
          max-width: 450px;
          margin-top: 24px;
          border-radius: 6px;
          box-sizing: border-box;
          overflow: hidden;
        `}
      >
        <TodoElement todo="Be amazing" />
        <TodoElement todo="Have fun" />
      </div>
    </div>
  );
}
