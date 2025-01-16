import styled from "styled-components";

export const CartContainer = styled.div`
  display: ${({ $active }) => ($active ? "block" : "none")};
  position: absolute;
  top: 150px;
  right: 40px;
  padding: 20px 20px 50px 20px;
  min-width: 260px;
  background-color: #ffffff;
`;
