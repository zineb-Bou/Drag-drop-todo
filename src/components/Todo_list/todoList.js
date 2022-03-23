/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import TodoElement from '../Todo_element/todoElement';
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../utils/todoContext';
import { todoListWrapper } from './todoList.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const getFilteredTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'All':
      return todos;
    case 'Completed':
      return todos.filter((t) => t.completed);
    case 'Active':
      return todos.filter((t) => !t.completed);
    default:
      throw new Error(`Unknown filter: ${visibilityFilter}`);
  }
};

export default function TodoList() {
  const { state, dispatch } = useContext(TodoContext);
  const { todos, visibilityFilter } = state;
  const [isBrowser, setIsBrowser] = useState(false);
  // To make the dragging  works  since I am using  SSR
  useEffect(() => {
    setIsBrowser(process.browser);
  }, []);

  const handleOndragEnd = (result) => {
    // Avoiding the error when moving the items out of their droppable area.
    if (!result.destination) return;
    const items = Array.from(todos);
    //Retrieving the item from its previous position
    const [reorderedItem] = items.splice(result.source.index, 1);
    //Drop the item at its new postition
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch({
      type: 'SET_TODOS',
      payload: {
        todos: items,
      },
    });
  };
  return (
    <>
      {isBrowser ? (
        <DragDropContext onDragEnd={handleOndragEnd}>
          <Droppable droppableId="droppable-1">
            {(provided) => {
              return (
                <ul
                  role="list"
                  css={todoListWrapper}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {getFilteredTodos(todos, visibilityFilter).map(
                    (todo, index) => (
                      <TodoElement todo={todo} key={todo.id} index={index} />
                    )
                  )}
                  {provided.placeholder}
                </ul>
              );
            }}
          </Droppable>
        </DragDropContext>
      ) : null}
    </>
  );
}
