import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  /* html {
    font-size: 14px;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
    line-height: 1.9;
  }

  * {
    font-family: ${({ theme }) => theme.font};
  } */

  body {
    font-family: ${({ theme }) => `${theme.font}_light`};
    color: var(--secondary-color);
  }


`
