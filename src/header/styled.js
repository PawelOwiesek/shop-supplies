import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const NavBar = styled.header`
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 1.3px;
  background-color: #b8b8b8;
`;

export const Logo = styled.img`
  margin: 0;
  padding-top: 5px;
  width: 100px;
  height: 80px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Item = styled.li`
  color: #ffffff;
  cursor: pointer;
`;
export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  border-bottom: 4px solid #b8b8b8;
  padding-bottom: 4px;
  &:hover {
    border-bottom: 4px solid #671515;
    color: crimson;
  }
`;

export const CartButton = styled.button`
  display: flex;
  border: none;
  padding: 0;
`;
