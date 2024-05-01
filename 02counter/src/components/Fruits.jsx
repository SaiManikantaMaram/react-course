export default function Fruits({ fruitList }) {
  return (
    <>
      <ul>
        {fruitList.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </>
  );
}