import styled from "styled-components";

export const HomePageContainer = styled.main`
  width: 100%;
  max-width: 70rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
`

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem auto;
  gap: 1rem;
  width: 60%;
  padding: 1rem 2rem;
  border-radius: 2rem;
  background-color: ${({theme}) => theme.colors["grey-light"]};

  input {
    width: 100%;
    background-color: ${({theme}) => theme.colors["grey-light"]};
    border: none;
    color: ${({theme}) => theme.colors["black"]};
    font-size: 1.1rem;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`

export const TableList = styled.table`

  tr {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    color: ${({theme}) => theme.colors["black"]};
    padding: 1rem 0;
    border-radius: 0.8rem;
    transition: 0.2s ease-in;
    cursor: pointer;

    &:hover {
      background-color: ${({theme}) => theme.colors["grey-light"]};
    
    }

    td {
      width: 20%
    }

    img {
      max-width: 50px;
    }

    p {
      font-weight: 500;
      font-size: 1.2rem;
    }

    @media (max-width: 640px) {
      p {
        font-size: 1rem;
      }
    }
  }

  tbody, thead {
    width: 100%;
  }
  
`