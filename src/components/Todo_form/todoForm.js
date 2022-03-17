/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import { useState, useContext } from 'react';
//import Checkbox from '../Checkbox/Checkbox';
import { todoInput, form } from './todoForm.css';
import { TodoContext } from '../../utils/todoContext';
import { v4 as uuidv4 } from 'uuid';

//Using a customized hook to set the input value
const useInputValue = () => {
  const [value, setValue] = useState('');
  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(''),
  };
};

export default function TodoForm() {
  const { dispatch } = useContext(TodoContext);
  const { resetValue, ...textInput } = useInputValue('');
  return (
    <form
      css={form}
      onSubmit={(e) => {
        e.preventDefault();
        if (!textInput.value.trim()) {
          return;
        }
        dispatch({
          type: 'ADD_TODO',
          payload: {
            id: uuidv4(),
            completed: false,
            text: textInput.value,
          },
        });
        resetValue();
      }}
    >
      {/* <Checkbox
        onClick={() =>
          dispatch({
            type: 'COMPLETE_ALL',
          })
        }
      /> */}
      <input
        css={todoInput}
        placeholder="What is your next todo?"
        maxLength="35"
        autoFocus
        type="text"
        {...textInput}
      />
    </form>
  );
}
