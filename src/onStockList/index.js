import {
  List,
  Container,
  Item,
  ProductData,
  Button,
} from "../styledList/styledList";

export const OnStockList = ({ setUpdatedProductList, updatedProductsList }) => {
  return (
    <Container>
      <h1 style={{ textAlign: "center", color: " #ffffff" }}>Stock list</h1>
      <List>
        {updatedProductsList.map((item) => {
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
        })}{" "}
        <div>
          <Button>Add new product</Button>
        </div>
      </List>
    </Container>
  );
};
