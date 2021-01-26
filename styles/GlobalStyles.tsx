import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // Customize scrollbar
  &::-webkit-scrollbar {
    width: 0.55rem;
  }

  &::-webkit-scrollbar-track {
    background: #ddddf0
  }

  &::-webkit-scrollbar-thumb {
    background: #33023d;
  }

  html {
    scroll-behavior: smooth;
  }
`;
