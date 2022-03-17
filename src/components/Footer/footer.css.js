/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';

export const footer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 450px;
  background: var(--todo-bg);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: var(--text);
  font-size: 0.8rem;
`;

export const filters = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  & > li {
    margin: 0 0.2rem;
  }
`;

export const clearCompleted = css`
  cursor: pointer;
  background: transparent;
  border: none;
  color: var(--text);
`;
