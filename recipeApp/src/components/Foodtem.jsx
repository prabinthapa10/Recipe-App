import React from "react";

export default function FooItem({ food }) {
  return (
    <div>
      <img src={food.image} alt={food.title} />
      <h1>{food.title}</h1>
      <button>View Recipes</button>
    </div>
  );
}
