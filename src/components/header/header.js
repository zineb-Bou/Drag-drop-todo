import dynamic from 'next/dynamic';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import { title, header, headerContainer } from './header.css';

const ThemeToggle = dynamic(() => import('../ToggleSwitch/ToggleSwitch'), {
  ssr: false,
});

function Header() {
  return (
    <header css={header}>
      <div css={headerContainer}>
        <h1 css={title}>Todo</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
