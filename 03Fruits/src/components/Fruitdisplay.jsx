export default function Fruitdisplay({ Fruit }) {
  return (
    <li>
      {Fruit.emoji} {Fruit.name} {Fruit.price}
    </li>
  );
}
