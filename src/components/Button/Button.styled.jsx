import styled from "styled-components";

export const FilledButton = styled.button`
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
  color: #fff;
  }
  `
export const EmptyButton = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: #e2e5e8;
  color: inherit;
  
  &:hover {
  background-color: #0e457dff;
  color: #fff;}
  `