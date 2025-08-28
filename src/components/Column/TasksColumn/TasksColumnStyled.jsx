import styled from "styled-components";

export const Column = styled.div`
  position: relative;
  width: 240px;

//   ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}px;`}

  padding-bottom: 20px;

  background-color: #1976d2;
  border-radius: 8px;

`;

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  

  overflow-y: auto;
  overflow-x: hidden;

  padding-left: 18px;
  padding-right: 18px;
  background-color: #1976d2;
`
//   ${({ noTasks }) =>
//     noTasks ||
//     `
//     margin-top: 24px;
//     `}

//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     max-height: ${props => props.maxHeight - 195}px;

//     padding-left: 21px;

//     ${({ maxHeight, tasksLength }) =>
//       maxHeight - 112 > tasksLength * 130 - 14 + 80
//         ? `
//       margin-right: 23px;
//       `
//         : `
//       margin-right: 9px; 
//       padding-right: 8px;
//       `}

//     ::-webkit-scrollbar {
//       width: 8px;
//     }

//     ::-webkit-scrollbar-thumb {
//       width: 8px;
//     }
//   }

//   @media (min-width: ${props => props.theme.breakpoints.laptop}) {
//     max-height: ${props => props.maxHeight - 199}px;
//   }
