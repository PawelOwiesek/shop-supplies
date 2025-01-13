import {
  ColumnName,
  Container,
  Divider,
  Item,
  List,
  ProductData,
} from "./styled";

export const OnShopList = ({ products }) => {
  return (
    <Container>
      <List>
        <ColumnName>
          <p>Product</p>
          <p>Brand</p>
          <p>Price</p>
          <p>Quantity</p>
        </ColumnName>
        {products.map((product) => {
          return (
            <>
              <Item key={product.name}>
                <ProductData>{product.name}</ProductData>
                <ProductData> {product.brand}</ProductData>
                <ProductData red>{product.price} €</ProductData>
                <ProductData green>{product.quantity}</ProductData>
              </Item>
              <Divider />
            </>
          );
        })}
      </List>
    </Container>
  );
};
