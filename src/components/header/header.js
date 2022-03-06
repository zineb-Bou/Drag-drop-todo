import dynamic from 'next/dynamic';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';

const ThemeToggle = dynamic(() => import('../ToggleSwitch/ToggleSwitch'), {
  ssr: false,
});

function Header() {
  return (
    <div
      css={css`
        width: 100%;
        height: 250px;
        background: var(--background-image);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 350px;
        `}
      >
        <h1
          css={css`
            color: white;
            font-weight: bold;
            letter-spacing: 8px;
            text-transform: uppercase;
          `}
        >
          Todo
        </h1>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
