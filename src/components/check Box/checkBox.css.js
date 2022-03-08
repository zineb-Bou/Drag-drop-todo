/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';

export const checkbox = css`
  cursor: pointer;
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--Very-Dark-Grayish-Blue);
  box-sizing: border-box;
  background: transparent;
  border-radius: 50%;
  &:after {
    content: '';
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    height: 6px;
    width: 10px;
    opacity: 0;
    transform: rotate(-50deg);
  }
  &.checked {
    border: none;
    background: linear-gradient(
      to right,
      var(--Check-BG-start),
      var(--Check-BG-middle),
      var(--Check-BG-end)
    );
    &:after {
      opacity: 1;
    }
  }
  &.hover {
    border-radius: 50px; /*1*/
    border: 2px solid transparent; /*2*/
    background: linear-gradient(
        45deg,
        var(--Check-BG-start),
        var(--Check-BG-end)
      )
      border-box; /*3*/
    -webkit-mask: /*4*/ linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out; /*5'*/
    mask-composite: exclude; /*5*/
    transition: all 0.3s ease-in-out;
  }
  input[type='checkbox'] {
    position: absolute;
    // opacity: 0;
    width: 10px;
    height: 10px;
  }
`;
