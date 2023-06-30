const Card = (props) => {
  const superheroes = props.superheroes;
  return (
    <div>
      {Object.entries(superheroes).map(([key, value], idx) => {
        return (
          <div key={key}>
            <img src={value.image} alt="" />
            <p>Name: {value.name}</p>
            <p>Occupation: {value.occupation}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
