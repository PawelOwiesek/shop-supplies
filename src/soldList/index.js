export const TotalSoldList = ({ totalSold }) => {
  return (
    <h1>
      {totalSold?.map((item) => {
        return (
          <li key={item.name}>
            {item.name}-st:
            {item.quantity}
            sold for:{(item.price * item.quantity).toFixed(2)}
          </li>
        );
      })}
    </h1>
  );
};
