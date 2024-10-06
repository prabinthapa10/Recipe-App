import React, { useState } from "react";
import Search from "./components/Search";

export default function () {
  // state variable to store food data
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <>
        <Search foodData={foodData} setFoodData={setFoodData} />
        {foodData.map((food) => (
          <h1>{food.title}</h1>
        ))}
      </>
    </div>
  );
}
