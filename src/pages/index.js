/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import Header from '../components/header/header';
import MainSec from '../components/MainSection/mainSection';
import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <>
      <Header />
      <MainSec />
      <button
        onClick={(e) => {
          auth.signinWithGitHub();
        }}
      >
        Login with Github
      </button>
      <button
        onClick={(e) => {
          auth.signinWithGoogle();
        }}
      >
        Login with Gmail
      </button>
      <div>{auth?.user?.name}</div>
      {auth.user && (
        <button
          onClick={(e) => {
            auth.signout();
          }}
        >
          Sign out
        </button>
      )}
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
