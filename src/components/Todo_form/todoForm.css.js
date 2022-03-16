/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';

export const form = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 90%;
  max-width: 450px;
  padding: 0 1rem;
  background: var(--todo-bg);
  border-radius: 5px;
`;

export const todoInput = css`
  background-color: transparent;
  border: none;
  height: 46px;
  width: 90%;
  padding: 1rem 0;
  padding-left: 8px;
  color: var(--text);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  &::placeholder {
    color: var(--placeholder);
  }
`;
