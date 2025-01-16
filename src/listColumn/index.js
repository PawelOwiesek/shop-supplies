import { ColumnName } from "./styled";

export const ColumnNameList = ({ $small }) => {
  return (
    <ColumnName $small={$small}>
      <p>Product</p>
      <p>Brand</p>
      <p>Price</p>
      <p>Quantity</p>
    </ColumnName>
  );
};
