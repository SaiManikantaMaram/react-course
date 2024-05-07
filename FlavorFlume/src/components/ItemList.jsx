import Item from "./Item";
export default function ItemList({ data }) {
  return (
    <>
      {data.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </>
  );
}
