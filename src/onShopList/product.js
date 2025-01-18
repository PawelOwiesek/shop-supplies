import { Button, Item, ProductData } from "../styledList/styledList";

export const Product = ({ product, onClick }) => {
  return (
    <Item>
      <ProductData>{product.name}</ProductData>
      <ProductData> {product.brand}</ProductData>
      <ProductData $red>{product.price} €</ProductData>
      <ProductData $green>
        {product.quantity === 0 ? "sold out" : product.quantity}
      </ProductData>{" "}
      <Button
        disabled={product.quantity === 0}
        onClick={() => onClick(product.id)}
      >
        Buy
      </Button>
    </Item>
  );
};
