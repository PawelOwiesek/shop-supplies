import { Divider, Item, ProductData } from "../styledList/styledList";

function Product({ sold }) {
  return (
    <>
      <Item>
        <ProductData $red>{sold.name}</ProductData>
        <ProductData $red>{sold.brand}</ProductData>
        <ProductData $green>Price: {sold.price} €</ProductData>
        <ProductData $green>{sold.quantity}</ProductData>
      </Item>
      <Divider />
    </>
  );
}

export default Product;
