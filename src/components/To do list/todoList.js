/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import TodoElement from '../To do element/todoElement';
import TodoForm from '../To do input/todoForm';
import { todoContainer, completedTodo } from './todoList.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (i) =>
    setTodos(
      todos.map((todo, k) =>
        k === i ? { ...todo, complete: !todo.complete } : todo
      )
    );

  const deleteTodo = (i) => {
    let newTodos = todos.filter((todo) => {
      return todo.id !== i;
    });
    setTodos(newTodos);
  };
  return (
    <div css={todoContainer}>
      <TodoForm
        onSubmit={(text) => {
          setTodos([{ text, complete: false, id: uuid() }, ...todos]);
          console.log(todos);
        }}
      />
      <div
        css={css`
          width: 90%;
          max-width: 450px;
          margin-top: 24px;
          border-radius: 6px;
          box-sizing: border-box;
          overflow: hidden;
        `}
      >
        {todos.map(({ text, complete, id }, i) => (
          <TodoElement
            key={id}
            todo={text}
            complete={complete}
            onClick={() => toggleComplete(i)}
            deleteTodo={deleteTodo}
            style={complete ? completedTodo : ''}
          />
        ))}
      </div>
    </div>
  );
}
