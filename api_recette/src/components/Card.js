import React from "react";
const Card = ({ meals }) => {

  return (
    <div className="card">
      <h2>{meals.strMeal}</h2>
      <h4>Origine : {meals.strArea}</h4>
      <img src={meals.strMealThumb} alt={"recette" + meals.strMeal} />
      <p>Recette : {meals.strInstructions}</p>
    </div>
  );
};

export default Card;