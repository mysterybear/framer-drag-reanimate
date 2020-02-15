import emotionTailwindPreflight from "emotion-tailwind-preflight";
import { css } from '@emotion/core';

export const globalStyles = css`
  ${emotionTailwindPreflight}
  html,
  body {
    padding: 0;
    margin: 0;
    background: white;
    height: 100%;
    font-family: Helvetica, Arial, sans-serif;
  }
`
