import { ColumnNameList } from "../listColumn";
import { Button, Item, List, ProductData } from "../styledList/styledList";
import { CartContainer } from "./styled";

export const ShoppingCart = ({
  active,
  setActive,
  soldProducts,
  setSoldProducts,
  soldStuff,
}) => {
  const onCheckout = () => {
    soldStuff(result);
    setSoldProducts([]);
    setActive(!active);
  };

  function addRepeatingObjects() {
    const result = {};

    soldProducts.forEach((item) => {
      const key = JSON.stringify(item, Object.keys(item).sort());

      if (result[key]) {
        result[key].amount += 1;
      } else {
        result[key] = { ...item, amount: 1 };
      }
    });

    return Object.values(result);
  }

  const result = addRepeatingObjects();

  return (
    <CartContainer $active={active}>
      <h4 id="shoppingCart">ShoppingCart</h4>
      <ColumnNameList $small />
      <List>
        {result.map((sold) => {
          return (
            <Item key={crypto.randomUUID()}>
              <ProductData $red>{sold.name}</ProductData>
              <ProductData $red>{sold.brand}</ProductData>
              <ProductData $green>price:{sold.price}€</ProductData>
              <ProductData $green>
                st:
                {sold.amount}
              </ProductData>
            </Item>
          );
        })}{" "}
        <Button onClick={onCheckout}>Checkout</Button>
        <p>To pay: 400 Euro</p> <p>No. articles: 67</p>
      </List>
    </CartContainer>
  );
};
