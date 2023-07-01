
const Card = ({ superhero, onClick }) => {
  const { id, name, occupation, image } = superhero;

  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={image} alt={name} />
      <h3>Name: {name}</h3>
      <p>Occupation: {occupation}</p>
    </div>
  );
};

export default Card;
