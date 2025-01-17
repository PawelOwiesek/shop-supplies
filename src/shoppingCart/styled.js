import styled from "styled-components";

export const CartContainer = styled.div`
  display: ${({ $active }) => ($active ? "block" : "none")};
  position: absolute;
  top: 150px;
  right: 30px;
  padding: 20px 20px 50px 20px;
  min-width: 260px;
  background-color: #ffffff;
  font-size: 18px;
`;

export const Checkout = styled.div`
  display: flex;
  font-size: 22px;
  font-weight: bold;
  color: #000000;
`;

export const TotalAmounts = styled.span`
  color: #c03f3f;
  font-size: 26px;
  padding: 0 10px;
`;
