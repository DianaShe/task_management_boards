import styled from "styled-components";

export const Form = styled.form`
padding: 20px;
display: block;
  gap: 4px;`

export const Input = styled.input`
display: block;
margin-bottom:20px;
outline: none;
border: 1px solid #e2e5e8; 
border-radius: 4px;
padding: 8px;
font: inherit;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

&:focus {
border-color: #1976d2;
}
`

export const Label = styled.label`
font-size: 14px;
color: #0e457dff;
`
