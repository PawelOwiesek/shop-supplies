import { ColumnNameList } from "../listColumn";
import { Container, Divider, List } from "../styledList/styledList";
import { Product } from "./product";

export const OnShopList = ({
  updatedProductsList,
  active,
  onButtonBuyClick,
}) => {
  return (
    <Container>
      <List $active={active}>
        <ColumnNameList />
        {updatedProductsList.map((product) => {
          return (
            <div key={product.id}>
              <Product product={product} onClick={onButtonBuyClick} />
              <Divider />
            </div>
          );
        })}
      </List>
    </Container>
  );
};
