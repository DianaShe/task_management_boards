import styled from 'styled-components';

export const SearchForm = styled.form`
display: flex;
  gap: 4px;
  `
export const SearchInput = styled.input`
flex-grow: 1;
  padding: 8px;
  border-radius:4px;
  font: inherit;
  outline: none;
  border: 1px solid #e2e5e8;

&:focus {
border-color: #1976d2
}
  `

