import { CartButton, Item, List, Logo, NavBar, StyledLink } from "./styled";

export const Header = ({ active, setActive }) => {
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
          <StyledLink to="/OnStockList">OnStockList</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/TotalSoldList">TotalSoldList</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/SpecialOffer">SpecialOffer</StyledLink>
        </Item>
        <Item>
          <CartButton onClick={() => setActive(!active)}>
            {" "}
            <img src="/ShoppingCart.jpg" width={80} alt=" ShoppingCart" />
          </CartButton>
        </Item>
      </List>{" "}
    </NavBar>
  );
};
