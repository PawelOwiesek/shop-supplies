import {
  Button,
  ColumnName,
  Container,
  Divider,
  Item,
  List,
  ProductData,
} from "./styled";

export const OnShopList = ({
  updatedProductsList,
  active,
  setActive,
  onButtonBuyClick,
  activeProduct,
  soldProducts,
  setSoldProducts,
}) => {
  return (
    <Container>
      <List>
        <ColumnName>
          <p>Product</p>
          <p>Brand</p>
          <p>Price</p>
          <p>Quantity</p>
        </ColumnName>
        {updatedProductsList.map((product) => {
          return (
            <div key={product.id}>
              <Item>
                <ProductData>{product.name}</ProductData>
                <ProductData> {product.brand}</ProductData>
                <ProductData $red>{product.price} €</ProductData>
                <ProductData $green>
                  {product.quantity === 0 ? "sold out" : product.quantity}
                </ProductData>{" "}
                <Button
                  disabled={product.quantity === 0}
                  onClick={() => onButtonBuyClick(product.id)}
                >
                  Buy
                </Button>
              </Item>
              <Divider />
            </div>
          );
        })}
      </List>
    </Container>
  );
};
