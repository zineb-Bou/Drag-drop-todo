import dynamic from 'next/dynamic';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import { title, header, headerContainer } from './header.css';
import CheckBox from '../check Box/checkBox';


const ThemeToggle = dynamic(() => import('../ToggleSwitch/ToggleSwitch'), {
  ssr: false,
});

function Header() {
  return (
    <header css={header}>
      <div css={headerContainer}>
        <h1 css={title}>Todo</h1>
        <ThemeToggle />
        <CheckBox />
      </div>
    </header>
  );
}

export default Header;
