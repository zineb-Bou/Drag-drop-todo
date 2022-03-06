/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';

export const ButtonStyle = css`
  width: 2rem;
  height: 2rem;
  box-sizing: border-box;
  background-color: red;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .sun {
    color: white;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(1);
    width: 24px;
    height: 24px;
    position: absolute;
    background: linear-gradient(to bottom, currentColor 4px, transparent 0)
        no-repeat 5px -6px/2px 6px,
      linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px
        14px/2px 6px,
      linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat -8px
        5px/6px 2px,
      linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 14px
        5px/6px 2px;
    border-radius: 100px;
    box-shadow: inset 0 0 0 2px;
    border: 6px solid transparent;
    // animation
    opacity: 0;
    transform: scale(0.6) rotate(0deg);
    transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
    &.visible {
      pointer-events: auto;
      opacity: 1;
      transform: scale(1) rotate(180deg);
      transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
    }
    &::after,
    &::before {
      content: '';
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 24px;
      height: 2px;
      border-right: 4px solid;
      border-left: 4px solid;
      left: -6px;
      top: 5px;
    }
    &::before {
      transform: rotate(-45deg);
    }
    &::after {
      transform: rotate(45deg);
    }
  }

  .moon {
    display: block;
    box-sizing: border-box;
    border-radius: 50%;
    position: absolute;
    color: white;
    overflow: hidden;
    position: relative;
    transform: rotate(-135deg) scale(1);
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-bottom-color: transparent;
    // animation
    opacity: 0;
    transform: scale(0.3);
    transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
    &.visible {
      pointer-events: auto;
      opacity: 1;
      transform: scale(1) rotate(-135deg);
      transition: transform 0.3s ease-in, opacity 0.2s ease-in 0.1s;
    }
    &::after {
      display: block;
      box-sizing: border-box;
      border-radius: 50%;
      position: absolute;
      content: '';
      position: absolute;
      width: 12px;
      height: 18px;
      border: 2px solid transparent;
      box-shadow: 0 0 0 2px;
      top: 8px;
      left: 2px;
    }
  }
`;
