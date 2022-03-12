/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import { useState } from 'react';
import CheckBox from '../check Box/checkBox';
import { todoInput, form } from './todoForm.css';

//using a customized hook to set the input value  
const useInputValue = () => {
  const [value, setValue] = useState('');
  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(''),
  };
};
export default function TodoForm({ onSubmit }) {
  const { resetValue, ...textInput } = useInputValue('');
  return (
    <form
      css={form}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(textInput.value);
        resetValue();
      }}
    >
      {/* <CheckBox /> */}
      <input
        css={todoInput}
        placeholder="Create a new todo…"
        maxLength="35"
        {...textInput}
      />
    </form>
  );
}
