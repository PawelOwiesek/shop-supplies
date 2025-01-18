import { Container, Item, List, ProductData } from "../styledList/styledList";
import Product from "./product";

export const TotalSoldList = ({ totalSold }) => {
  const initialValue = 0;
  const totalEarnings = totalSold?.map((article) => {
    return article.price * article.quantity;
  }, initialValue);

  const shopEarnings = totalEarnings?.reduce((acc, item) => {
    return acc + (item || 0);
  }, initialValue);

  return (
    shopEarnings && (
      <Container>
        <>
          {" "}
          <h1 style={{ textAlign: "center", color: " #ffffff" }}>
            Total sold articles
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "250px",
              textAlign: "center",
              color: " #ffffff",
              maxWidth: "1300px",
              marginLeft: "120px",
              fontWeight: "bold",
              fontSize: "23px",
            }}
          >
            {" "}
            <p>Product</p>
            <p>Quantity</p>
            <p>Total price</p>
          </div>
          <List>
            {totalSold?.map((item) => {
              return <Product key={item.id} item={item} />;
            })}
          </List>
          <p
            style={{
              backgroundColor: " #ffffff",
              padding: "10px",
              textAlign: "center",
              alignSelf: "center",
              maxWidth: "400px",
              margin: "15px auto",
            }}
          >
            Shop earnings : {shopEarnings.toFixed(2)} €
          </p>
        </>
      </Container>
    )
  );
};
