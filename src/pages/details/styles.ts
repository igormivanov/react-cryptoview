import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin-right: auto;
  margin-left: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;


  p:nth-child(1){
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const CryptoInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;

  @media (max-width: 640px){
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const PriceChangeGraphic = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background-color: ${({theme}) => theme.colors["grey-light"]};
`

export const GraphicLabel = styled.p`
  text-align: center;
  margin: 2rem 0;
  font-size: 1.1rem;
  letter-spacing: 1.5px;
`