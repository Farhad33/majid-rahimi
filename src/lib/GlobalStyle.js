import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
      font-family: system-ui, sans-serif;
      height: 100%;
  }
  html {
    height: 100%;
  }
`