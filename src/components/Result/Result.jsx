// const products from "../../data/material.json"
export const Result = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colspan="2">Заказ</th>
          <th>№</th>
          <th>Ширина в мм</th>
          <th>Висота в мм</th>
          <th>кол-во</th>
          <th>цена без ндс</th>
          <th>цена с ндс</th>
        </tr>
      </thead>
      <tbody>
        {/* {products.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <tr>{type}</tr>
              <tr>{amount}</tr>
              <tr>{currency}</tr>
            </tr>
          );
        })} */}
      </tbody>
    </table>
  );
};
