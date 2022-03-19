/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { css } from '@emotion/react';
import { checkbox, checkbox_label } from './checkbox.css';

export default function Checkbox({ onClick, checked, id, text }) {
  return (
    <div css={checkbox}>
      <input id={id} type="checkbox" onChange={onClick} checked={checked} />
      <label css={checkbox_label} htmlFor={id} aria-label={text}>
        <svg viewBox="0 0 100 100">
          <path
            fill="none"
            stroke="#000"
            strokeWidth="13"
            d="M12.1 52.1l24.4 24.4 53-53"
          />
        </svg>
      </label>
    </div>
  );
}
