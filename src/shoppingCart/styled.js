import styled from "styled-components";

export const CartContainer = styled.div`
  display: ${({ $active }) => ($active ? "block" : "none")};
  position: absolute;
  top: 120px;
  right: 40px;
  background-color: #ffffff;
  padding: 20px;
  min-width: 260px;
`;
