import { ColumnNameList } from "../listColumn";
import { Button, List } from "../styledList/styledList";
import Product from "./product";
import { CartContainer, Checkout, TotalAmounts } from "./styled";

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
        result[key].quantity += 1;
      } else {
        result[key] = { ...item, quantity: 1 };
      }
    });

    return Object.values(result);
  }

  const result = addRepeatingObjects();

  const initialValue = 0;
  const totalAmount = result?.reduce((acc, item) => {
    return acc + (item.quantity || 0);
  }, initialValue);

  const totalPrice = result.reduce((acc, item) => {
    return acc + (item.price * item.quantity || 0);
  }, initialValue);

  return (
    <CartContainer $active={active}>
      <h4 id="shoppingCart">ShoppingCart</h4>
      <ColumnNameList $small key={crypto.randomUUID()} />
      <List>
        {result.map((sold) => {
          return <Product key={crypto.randomUUID()} sold={sold} />;
        })}
        <Button onClick={onCheckout}>Checkout</Button>
        <Checkout>
          <p>
            To paid:
            <TotalAmounts> {totalPrice.toFixed(2)} €</TotalAmounts>
          </p>
          <p>
            No. articles:
            <TotalAmounts> {totalAmount}</TotalAmounts>
          </p>
        </Checkout>
      </List>
    </CartContainer>
  );
};
