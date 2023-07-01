
const Card = ({ superhero, onClick }) => {
  const { id, name, occupation, image } = superhero;

  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{occupation}</p>
    </div>
  );
};

export default Card;
