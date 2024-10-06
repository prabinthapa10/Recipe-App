import React from "react";

export default function FoodList({ foodData }) {
  return (
    <div>
      {" "}
      <div>
        {foodData.map((food) => (
          <p>{food.title}</p>
        ))}
      </div>
    </div>
  );
}
