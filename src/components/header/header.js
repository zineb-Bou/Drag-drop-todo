import dynamic from 'next/dynamic';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import { title, header, headerContainer, signOut } from './header.css';
import { useAuth } from '../../lib/auth';
const ThemeToggle = dynamic(() => import('../ToggleSwitch/ToggleSwitch'), {
  ssr: false,
});

function Header() {
  const auth = useAuth();
  return (
    <header css={header}>
      <div css={headerContainer}>
        <h1 css={title}>Todo</h1>
        <div
          css={css`
            display: flex;
          `}
        >
          <button
            css={signOut}
            onClick={(e) => {
              auth.signout();
            }}
          >
            Sign out
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
