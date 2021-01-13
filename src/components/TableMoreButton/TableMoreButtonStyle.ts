import styled from "styled-components/macro";

export const CurrencyTableMoreButton = styled.button`
  display: block;
  color: white;
  background-color: rgb(24, 198, 131);
  border: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  margin: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 15px -3px;
  font-weight: 700;
  font-size: 1.4rem;
  font-family: "Lato", inherit;
  transition: transform 0.2s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    transform: translateY(-2px);
  }

  &:hover {
    transform: translateY(-2px)
  }
`;
