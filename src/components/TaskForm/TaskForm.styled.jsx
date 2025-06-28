import styled from "styled-components";

export const Form = styled.form`
padding: 20px;
display: block;
  gap: 4px;`

export const Input = styled.input`
display: block;
margin-bottom:20px;

border-radius: 4px;
flex-grow: 1;
  padding: 8px;
  font: inherit;

&:focus {
outline-color: #1976d2
}`

export const AddFormButton = styled.button`
 display: block;
  padding: 8px 12px;
  margin: auto;
  
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: #1976d2;
  color: inherit;
  
  
  &:hover {
  border: 1px solid #fff;
  color: #fff;}
  `
