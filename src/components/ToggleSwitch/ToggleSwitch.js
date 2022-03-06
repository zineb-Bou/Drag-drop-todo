import { useState, useEffect } from 'react';
import { ButtonStyle } from './ToggleSwitch.css.js';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';

function ToggleSwitch() {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  return (
    <button
      css={ButtonStyle}
      onClick={() => {
        setActiveTheme(inactiveTheme);
      }}
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
    >
      <span
        className={`sun ${activeTheme === 'light' ? '' : 'visible'}`}
        aria-hidden={true}
      ></span>
      <span
        className={`moon ${activeTheme === 'dark' ? '' : 'visible'}`}
        aria-hidden={true}
      ></span>
    </button>
  );
}

export default ToggleSwitch;
