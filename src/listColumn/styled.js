import styled from "styled-components";

export const ColumnName = styled.div`
  display: grid;
  grid-template-columns: ${({ $small }) =>
    $small ? "repeat(4,115px)" : "repeat(2, 330px) repeat(2, 100px) "};
  margin-left: 20px;
  color: #3a5858;
  font-weight: bold;
  font-size: 20px;
  gap: 20px;
`;
