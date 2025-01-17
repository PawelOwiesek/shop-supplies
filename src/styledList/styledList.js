import styled from "styled-components";

export const Container = styled.div`
  background-image: url(/logo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  color: #201e1e;
  font-size: 22px;
  padding-top: 60px;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0 auto;
  padding: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
  background-color: #ffffff;
  transition: transform 2s cubic-bezier(0.09, 0.78, 0.42, 1.03);
  transform: ${({ $active }) => ($active ? "translateX(-280px)" : "")};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: 20px;
`;

export const ProductData = styled.p`
  margin: 4px;
  font-weight: 700;
  word-wrap: break-word;
  min-width: 300px;
  min-width: ${({ $red }) => ($red ? "100px" : "")};
  min-width: ${({ $green }) => ($green ? "60px" : "")};
  width: 100%;
  color: ${({ $red }) => ($red ? " #880d0d" : "")};
  color: ${({ $green }) => ($green ? "#037c07" : "")};
`;

export const Divider = styled.div`
  border: 1px solid #0000001f;
  width: 100%;
`;

export const Button = styled.button`
  border: 2px solid black;
  padding: 3px 30px;
  border-radius: 28px;
  margin: 20px;
  font-size: 20px;
  cursor: pointer;
  background-color: #beb6b6;
`;
