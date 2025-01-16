import { ColumnNameList } from "../listColumn";
import {
  Button,
  Container,
  Divider,
  Item,
  List,
  ProductData,
} from "../styledList/styledList";

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
