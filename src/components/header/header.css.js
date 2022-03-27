/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';

export const header = css`
  width: 100%;
  height: 250px;
  background: var(--background-image);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease-in-out;
`;

export const headerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 450px;
`;

export const title = css`
  color: white;
  font-weight: bold;
  letter-spacing: 8px;
  text-transform: uppercase;
`;

export const signOut = css`
  border: none;
  margin: 0 0.5rem;
  background: none;
  font-weight: bold;
  color: white;
  padding-right: 0.5rem;
  position: relative;
  cursor: pointer;
  &:before {
    content: '';
    width: 1px;
    height: 20px;
    background-color: white;
    position: absolute;
    right: 0;
  }
`;
