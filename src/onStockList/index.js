import { List, Container, Button } from "../styledList/styledList";
import Product from "./product";

export const OnStockList = ({ setUpdatedProductList, updatedProductsList }) => {
  return (
    <Container>
      <h1 style={{ textAlign: "center", color: " #ffffff" }}>Stock list</h1>
      <List>
        {updatedProductsList.map((item) => {
          return <Product item={item} key={item.id} />;
        })}
        <div>
          <Button>Add new product</Button>
        </div>
      </List>
    </Container>
  );
};
