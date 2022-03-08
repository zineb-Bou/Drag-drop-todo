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
  border: 1px solid red;
`;

export const title = css`
  color: white;
  font-weight: bold;
  letter-spacing: 8px;
  text-transform: uppercase;
`;
