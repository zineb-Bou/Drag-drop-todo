/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';

export const btnWrapper = css`
  width: 280px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const signInTitle = css`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text);
`;

export const githubBtn = css`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  background: var(--todo-bg);
  border: 1px solid var(--lining);
  color: var(--text);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  &:hover {
    border-color: var(--footer-hover);
  }
`;

export const gmailBtn = css`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  background: var(--todo-bg);
  border: 1px solid var(--lining);
  color: var(--text);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  &:hover {
    border-color: var(--footer-hover);
  }
`;
