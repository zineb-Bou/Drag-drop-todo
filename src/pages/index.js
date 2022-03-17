/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import Header from '../components/header/header';
import MainSec from '../components/MainSection/mainSection';

export default function Home() {
  return (
    <>
      <Header />
      <MainSec />
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
          <a
            href="https://github.com/zineb-Bou"
            css={css`
              text-decoration: none;
              color: var(--Check-BG-end);
            `}
          >
            {' '}
            Zineb Boutaa
          </a>
        </p>
      </footer>
    </>
  );
}
