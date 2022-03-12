/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';

export const todoElement = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 46px;
  padding: 1rem;
  background: var(--todo-bg);
  border-bottom: 1px solid var(--Dark-Grayish-Blue);
  cursor: pointer;
`;

export const todoText = css`
  text-align: left;
  width: 80%;
  color: var(--text);
`;

export const closeBtn = css`
  background: transparent;
  border: none;
  z-index: 2;
`;
