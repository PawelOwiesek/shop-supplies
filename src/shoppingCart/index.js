export const ShoppingCart = ({
  active,
  setActive,
  soldProducts,
  setSoldProducts,
}) => {
  const onCheckout = () => {
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
    <div
      style={{
        display: `${active ? "block" : "none"}`,
        position: "fixed",
        top: "120px",
        right: "40px",
        backgroundColor: "#ffffff",
        padding: "20px",
        minWidth: "260px",
      }}
    >
      <h4 id="shoppingCart">ShoppingCart</h4>
      <ul>
        {result.map((sold) => {
          return (
            <li key={crypto.randomUUID()}>
              {sold.name} price:{sold.price}€ st:{sold.amount}
            </li>
          );
        })}
      </ul>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
};
