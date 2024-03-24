import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

li {
  list-style: none;
}

body {
  background: ${({theme}) => theme.colors["white"]};
  font-family: 'Inter', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

input:focus {
  outline: none; /* Remove a borda padrão de foco */
}

`