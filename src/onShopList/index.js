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
              <Item key={product.id}>
                <ProductData>{product.name}</ProductData>
                <ProductData> {product.brand}</ProductData>
                <ProductData $red>{product.price} €</ProductData>
                <ProductData $green>{product.quantity}</ProductData>{" "}
                <button
                  style={{
                    border: "2px solid black",
                    padding: "3px 30px",
                    borderRadius: "28px",
                    margin: "20px",
                    position: "absolute",
                    fontSize: "20px",
                    right: "430px",
                    cursor: "pointer",
                    backgroundColor: "#da7979",
                  }}
                  onClick={() => console.log(product.name)}
                >
                  Buy
                </button>
              </Item>

              <Divider />
            </>
          );
        })}
      </List>
    </Container>
  );
};
