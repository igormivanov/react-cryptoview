import styled from "styled-components";

export const CardContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors["grey-light"]};
    padding: 1rem 0;

  &:not(:last-child) {
    border-right: 1px solid black;
  }

  p {
    font-weight: 500;
    text-align: center;
  }

  @media(max-width: 640px) {
  width: 100%;
  border: 1px solid black;

  &:nth-child(n) {
    border: 1px solid ${({ theme }) => theme.colors["grey-light2"]};
  }

    /* &:not(:last-child) {
      border-right: 1px solid black;
    } */
  }
`

interface ValueProps {
  pricefall: string | undefined
}

export const Value = styled.div<ValueProps>`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: ${props => props.pricefall == 'true' ? 'red' : props.pricefall == 'false' ? 'green' : ""};
`