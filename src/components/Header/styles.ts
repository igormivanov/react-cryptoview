import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;
  background: ${({theme}) => theme.colors["white"]};
  width: 100%;

  ul {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  @media (max-width: 640px) {
    ul {
      gap: 0.5rem;
    }
  }

`

export const Title = styled.a`
  color: ${({theme}) => theme.colors.gold};
  font-size: 2.5rem;
  font-family: "Ysabeau SC", sans-serif;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`

export const HomePageButton = styled(Link)`
  color: ${({theme}) => theme.colors.white};
  font-weight: 600;
  padding: 0.5rem 1rem;
  background-color: ${({theme}) => theme.colors.gold};
  border-radius: 0.5rem;
  transition: 0.3s ease-out;

  &:hover{
    color: ${({theme}) => theme.colors["grey-light"]};
    box-shadow: 4px 6px 5px 0px rgba(191,145,59,0.40);
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const WalletButton = styled.button`

  border: none;
  color: ${({theme}) => theme.colors.white};
  font-weight: 600;
  padding: 0.5rem 1rem;
  background-color: ${({theme}) => theme.colors.gold};
  border-radius: 0.5rem;
  transition: 0.3s ease-out;
  cursor: pointer;
  font-size: 1rem;

  &:hover{
    color: ${({theme}) => theme.colors["grey-light"]};
    box-shadow: 4px 6px 5px 0px rgba(191,145,59,0.40);
  }


  @media (max-width: 768px) {
    display: none;
  }

`

export const MetaMaskDropDown = styled.div`
  color: ${({theme}) => theme.colors.white};
  font-weight: 400;
  font-size: 0.9rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${({theme}) => theme.colors["gold-light"]};
  border-radius: 0.5rem;
  transition: 0.3s ease-out;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  &:hover{
    color: ${({theme}) => theme.colors["grey-light"]};
    box-shadow: 4px 6px 5px 0px rgba(191,145,59,0.40);
  }

  svg {
    margin-right: 0.5rem;
    color: ${({theme}) => theme.colors["white"]};
  }

  @media(max-width: 768px) {
    display: none;
  }
`

interface DropdownCardProps {
  open: boolean;
}

export const DropdownCard = styled.div<DropdownCardProps>`
  margin-top: 1rem;
  width: auto;
  position: absolute;
  height: auto;
  background: ${({theme}) => theme.colors["grey"]};
  box-shadow: 0 3px 15px #00000029;
  z-index: 9999;
  border-radius: 4px;
  margin-right: 1rem;

  ${({open}) => open === false && css`
    display: none;
  `}

  div {
    width: 100%;
    display: flex;
    padding: 0.75rem;
    font-size: 0.9rem;
    font-weight: 300;
    justify-content: flex-start;
    align-items: center;
  }
`

export const MobileIcon = styled(Link)`
  display: none;

  @media(max-width: 768px) {
    display: block;
    color: ${({theme}) => theme.colors["gold"]};
  }
`

export const MobileWalletButton = styled.div`
  display: none;
  color: ${({theme}) => theme.colors["gold"]};
  cursor: pointer;

  @media(max-width: 768px) {
    display: block;
    
  }
`
interface MobileDropdownCardProps {
  open: boolean;
}

export const MobileDropdownCard = styled.div<MobileDropdownCardProps>`
  margin-top: 1rem;
  width: auto;
  position: absolute;
  height: auto;
  background: ${({theme}) => theme.colors["grey"]};
  box-shadow: 0 3px 15px #00000029;
  z-index: 9999;
  border-radius: 4px;
  margin-right: 1rem;

  ${({open}) => open === false && css`
    display: none;
  `}

  div {
    width: 100%;
    display: flex;
    padding: 0.75rem;
    font-size: 0.9rem;
    font-weight: 300;
    justify-content: flex-start;
    align-items: center;
  }
`
export const MobileWalletButton2 = styled.div`
  display: none;
  border: none;
  color: ${({theme}) => theme.colors.white};
  padding: 0.5rem 1rem;
  background-color: ${({theme}) => theme.colors.gold};
  border-radius: 0.5rem;
  transition: 0.3s ease-out;
  cursor: pointer;
  font-size: 0.8rem;

  @media(max-width: 768px){
    display: block;
  }
`
