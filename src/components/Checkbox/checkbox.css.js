/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';

export const checkbox = css`
  & input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 15px;
    height: 15px;
  }
  & input:hover:not(:checked) + label {
    &:before {
      border: 2px solid transparent; /*2*/
      background: linear-gradient(
          45deg,
          hsl(192, 100%, 67%),
          hsl(220, 98%, 61%),
          hsl(280, 87%, 65%)
        )
        border-box; /*3*/
      -webkit-mask: /*4*/ linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out; /*5'*/
      mask-composite: exclude; /*5*/
    }
  }

  & input:checked + label {
    &:before {
      border-color: transparent;
      background: linear-gradient(
        to bottom,
        hsl(192, 100%, 67%),
        hsl(220, 98%, 61%),
        hsl(280, 87%, 65%)
      );
    }
    path {
      stroke: #fff;
      stroke-dashoffset: 0;
    }
  }
`;

export const checkbox_label = css`
  position: relative;
  display: grid;
  place-items: center;
  cursor: pointer;
  &:before {
    content: '';
    width: 24px;
    height: 24px;
    border-radius: 100px;
    display: inline-block;
    border: 2px solid #c5c5c5;
    transition: all 0.35s ease-out;
  }
  svg {
    position: absolute;
    width: 15px;
    height: 15px;
  }
  path {
    stroke-dashoffset: 111.46px;
    stroke-dasharray: 111.46px;
    stroke: #3863d9;
    transition: all 0.35s ease-out;
  }
`;
