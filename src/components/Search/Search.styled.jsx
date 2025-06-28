import styled from 'styled-components';

export const SearchForm = styled.form`
display: flex;
  gap: 4px;
  `
export const SearchInput = styled.input`
flex-grow: 1;
  padding: 8px;
  font: inherit;

&:focus {
outline-color: #1976d2
}
  `

export const LoadButton = styled.button`
 display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: #e2e5e8;
  color: inherit;
  
  &:hover {
  background-color: #1976d2;
  color: #fff;}
  `
