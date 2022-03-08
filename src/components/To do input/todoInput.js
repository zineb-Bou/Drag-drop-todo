/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import { useState } from 'react';
import CheckBox from '../check Box/checkBox';
import { todoInput, form } from './todoInput.css';

export default function TodoInput() {
  return (
    <form css={form}>
      {/* <CheckBox /> */}
      <input css={todoInput} placeholder="Create a new todo…" maxLength="35" />
    </form>
  );
}
