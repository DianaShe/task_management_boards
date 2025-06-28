import styled from "styled-components";

export const TaskCardContainer = styled.div`
  padding: 14px 12px 18px 15px;
  
  border-radius: 8px;

  border: 1px solid   #1976d2;
  background-color: #e2e5e8;
`;

export const TaskCardTitle = styled.div`
  overflow: hidden;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  
  text-overflow: ellipsis;
`;

export const TaskCardText = styled.div`
  overflow: hidden;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  
  text-overflow: ellipsis;
  white-space: nowrap;
`;