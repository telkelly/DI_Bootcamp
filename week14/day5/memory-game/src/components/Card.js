import { useEffect, useState } from "react";

const Card = ({ superhero, onClick }) => {
  const { id, name, image } = superhero;

  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
