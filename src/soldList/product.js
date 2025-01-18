import { Item, ProductData } from "../styledList/styledList";

function Product({ item }) {
  return (
    <Item>
      <ProductData>{item.name}</ProductData>
      <ProductData> {item.quantity}</ProductData>
      <ProductData>
        {" "}
        sold for:{(item.price * item.quantity).toFixed(2)}
      </ProductData>
    </Item>
  );
}

export default Product;
