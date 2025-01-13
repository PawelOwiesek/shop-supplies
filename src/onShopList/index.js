export const OnShopList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.name}>
            <p>{product.name}</p>
            <p> {product.brand}</p>
            <p>{product.price} €</p>
            <p>{product.quantity}</p>
          </li>
        );
      })}
    </ul>
  );
};
