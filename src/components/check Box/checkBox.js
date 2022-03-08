/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import { checkbox } from './checkBox.css';
import { useState } from 'react';

export default function Checkbox() {
  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState(false);
  const handleMouseOver = () => {
    if (!checked) setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <label
      //css={checkbox}
      className={`${checked ? 'checked' : ''} ${hover ? 'hover' : ''}`}
      onMouseEnter={handleMouseOver}
      onMouseOut={handleMouseOut}
      htmlFor="checkbox"
      aria-label="check box"
    >
      <div aria-hidden="true"></div>
      <input
        id="checkbox"
        type="checkbox"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
    </label>
  );
}
