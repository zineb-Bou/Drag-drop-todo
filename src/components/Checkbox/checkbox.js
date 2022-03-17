/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import { checkbox, check } from './checkbox.css';
import { useState } from 'react';

export default function Checkbox({ onClick }) {
  // const [hover, setHover] = useState(false);
  // const handleMouseOver = () => {
  //   if (!checked) setHover(true);
  // };
  // const handleMouseOut = () => {
  //   setHover(false);
  // };

  return (
    <label
      css={checkbox}
      // className={`${hover ? 'hover' : ''}`}
      // onMouseEnter={handleMouseOver}
      // onMouseOut={handleMouseOut}
      onClick={onClick}
      htmlFor="checkbox"
      aria-label="check box"
    >
      <div aria-hidden="true"></div>
      <input id="checkbox" type="checkbox" />
    </label>
  );
}
