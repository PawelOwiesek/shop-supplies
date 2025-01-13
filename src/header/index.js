import { Item, List, Logo, NavBar, StyledLink } from "./styled";

export const Header = () => {
  return (
    <NavBar>
      <List>
        <Item>
          <Logo src="favicon.ico" alt="logo" />
        </Item>
        <Item>
          <StyledLink to="/">OnShopList</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/OnStockList">nStockList</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/SoldList">SoldList</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/SpecialOffer">SpecialOffer</StyledLink>
        </Item>
      </List>{" "}
    </NavBar>
  );
};
