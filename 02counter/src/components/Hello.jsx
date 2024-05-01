function Hello({ person }) {
  return (
    <div>
      {person.message} {person.name} {person.seatNumber}
    </div>
  );
}
export default Hello;
