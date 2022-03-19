/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import { useState, useContext } from 'react';
import Checkbox from '../Checkbox/checkbox';
import { todoElement, todoText, closeBtn } from './todoElement.css';
import { TodoContext } from '../../utils/todoContext';

export default function TodoElement({ todo }) {
  const { dispatch } = useContext(TodoContext);
  const { id, completed, text } = todo;
  const deleteTodo = (id) =>
    dispatch({
      type: 'DELETE_TODO',
      payload: {
        id,
        text,
      },
    });
  const completeTodo = (id) =>
    dispatch({
      type: 'COMPLETE_TODO',
      payload: {
        id,
        text,
      },
    });
  return (
    <li css={todoElement}>
      <Checkbox
        onClick={() => completeTodo(todo.id)}
        checked={completed}
        id={id}
        text={text}
      />
      <p css={todoText}>{text}</p>
      {completed ? (
        <button
          css={closeBtn}
          arai-label="remove todo"
          onClick={() => deleteTodo(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            aria-hidden="true"
          >
            <path
              fill="#494C6B"
              fillRule="evenodd"
              d="m16.97 0 .708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </button>
      ) : (
        ''
      )}
    </li>
  );
}
