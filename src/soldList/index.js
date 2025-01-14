export const TotalSoldList = ({ totalSold }) => {
  return (
    <h1>
      {totalSold?.map((item) => {
        return (
          <li key={item.name}>
            {item.name}-st:
            {item.amount}
          </li>
        );
      })}
    </h1>
  );
};
