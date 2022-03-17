/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import { TodoContext } from '../../utils/todoContext';
import { useContext, useState } from 'react';
import { footer, filters, clearCompleted } from './footer.css';

const FILTER_TITLES = ['All', 'Active', 'Completed'];

export default function TodoFooter() {
  const { state, dispatch } = useContext(TodoContext);
  const { todos } = state;
  const todosCount = todos.length;
  const completedCount = todos.reduce(
    (count, todo) => (todo.completed ? count + 1 : count),
    0
  );
  const activeCount = todosCount - completedCount;
  return (
    <div css={footer}>
      <span>
        <strong>{activeCount || 'No'}</strong>{' '}
        {activeCount === 1 ? 'item' : 'items'} left
      </span>
      <ul css={filters} role="list">
        {FILTER_TITLES.map((filter) => (
          <li key={filter}>
            <a
              onClick={() =>
                dispatch({
                  type: 'SET_VISIBILITY',
                  payload: {
                    visibilityFilter: filter,
                  },
                })
              }
            >
              {filter}
            </a>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button
          css={clearCompleted}
          onClick={() =>
            dispatch({
              type: 'CLEAR_COMPLETED',
            })
          }
        >
          Clear completed
        </button>
      )}
    </div>
  );
}
