import styled from "styled-components";

export const Container = styled.div`
  background-image: url(/logo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
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
  background-color: #f3eaea;
`;

export const Item = styled.li`
  display: flex;
  gap: 40px;
  margin-left: 20px;
`;

export const ProductData = styled.p`
  font-weight: 700;
  min-width: 300px;
  min-width: ${({ $red }) => ($red ? "100px" : "")};
  min-width: ${({ $green }) => ($green ? "100px" : "")};
  width: 100%;
  color: ${({ $red }) => ($red ? "crimson" : "")};
  color: ${({ $green }) => ($green ? "green" : "")};
`;

export const ColumnName = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 330px) repeat(2, 100px);
  margin-left: 50px;
  color: blue;
  font-weight: bold;
`;

export const Divider = styled.div`
  border: 2px solid #008080;
  width: 100%;
`;

export const Button = styled.button`
  border: 2px solid black;
  padding: 3px 30px;
  border-radius: 28px;
  margin: 20px;
  position: absolute;
  font-size: 20px;
  right: 430px;
  cursor: pointer;
  background-color: #da7979;
`;
