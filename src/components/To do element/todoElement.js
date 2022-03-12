/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import { useState } from 'react';
import CheckBox from '../check Box/checkBox';
import { todoElement, todoText, closeBtn } from './todoElement.css';

export default function TodoElement({
  todo,
  onClick,
  style,
  complete,
  key,
  deleteTodo,
}) {
  return (
    <div css={[todoElement, style]} key={key}>
      <CheckBox checked={complete} onClick={onClick} />
      <p css={todoText}>{todo}</p>
      {complete ? (
        <button
          css={closeBtn}
          arai-label="remove todo"
          onClick={() => deleteTodo(key)}
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
    </div>
  );
}
