export const ShoppingCart = ({ active, soldProducts, setSoldProducts }) => {
  const onCheckout = () => {
    setSoldProducts([]);
  };
  return (
    <div
      style={{
        display: `${active ? "block" : "none"}`,
        position: "absolute",
        top: "120px",
        right: "40px",
        backgroundColor: "#ffffff",
        padding: "20px",
        minWidth: "260px",
      }}
    >
      <h4 id="shoppingCart">ShoppingCart</h4>
      <ul>
        {soldProducts.map((sold) => {
          return (
            <li key={crypto.randomUUID()}>
              {sold.name} price:{sold.price}€ {sold.quantity}
            </li>
          );
        })}
      </ul>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
};
