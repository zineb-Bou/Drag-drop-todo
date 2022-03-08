/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import Header from '../components/header/header';
import TodoList from '../components/To do list/todoList';
export default function Home() {
  return (
    <>
      <Header />
      <TodoList />
      <footer
        css={css`
          margin: 50px 0;
          display: grid;
          place-items: center;
          color: var(--text);
        `}
      >
        <p>Drag and drop to reorder list</p>
        <p>
          Made with ❤️ by
          <a href="https://github.com/zineb-Bou">Zineb Boutaa</a>
        </p>
      </footer>
    </>
  );
}
