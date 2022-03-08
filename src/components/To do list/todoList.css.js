/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';

export const todoContainer = css`
  display: grid;
  place-items: center;
  margin-top: -80px;
`;

export const completedTodo = css`
  & > p {
    color: var(--placeholder);
  }
  opacity: 0.9;
  color: var(--placeholder);
  text-decoration: line-through 2px;
`;
