import { Button, Item, ProductData } from "../styledList/styledList";

function Product({ item }) {
  return (
    <Item>
      <ProductData> {item.name}</ProductData>{" "}
      <ProductData $large>
        {item.quantity === 0 ? (
          <div style={{ display: "inline-block" }}>
            No more products : <Button>Send more to shop</Button>
          </div>
        ) : (
          item.quantity
        )}
      </ProductData>
    </Item>
  );
}

export default Product;
