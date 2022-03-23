/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';

export const footer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 450px;
  background: var(--todo-bg);
  border-radius: 0 0 5px 5px;
  padding: 0.5rem 1rem;
  color: var(--footer-text);
  font-size: 0.8rem;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    background: transparent;
    box-shadow: none;
    padding: 0;
    & > ul {
      grid-column: 1/-1;
      grid-row: 2/3;
      margin-top: 1.5rem;
      background: var(--todo-bg);
      width: 100%;
      padding: 0.6rem;
      border-radius: 5px;
    }
    & > button {
      text-align: right;
      grid-column: 2/-1;
      grid-row: 1/2;
      background: var(--todo-bg);
      padding: 0.6rem;
      border-radius: 0 0 5px 0;
    }
    & > span {
      padding: 0.6rem;
      border-radius: 0 0 0 5px;
      background: var(--todo-bg);
    }
  }
`;

export const filters = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  & > li {
    margin: 0 0.5rem;
    user-select: none;
    & > a {
      &:hover {
        color: var(--footer-hover);
      }
    }
  }
`;

export const clearCompleted = css`
  cursor: pointer;
  background: transparent;
  border: none;
  color: var(--footer-text);
  &:hover {
    color: var(--footer-hover);
  }
`;
