import styled from "styled-components";

export const LoaderBackground = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
`

export const LoaderContent = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: 
  radial-gradient(farthest-side, ${({theme}) => theme.colors.gold} 94%,#0000) top/8px 8px no-repeat,
  conic-gradient(#0000 30%, ${({theme}) => theme.colors.gold});
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation: l13 1s infinite linear;
  
  @keyframes l13{ 
    100%{transform: rotate(1turn)}
  }

`