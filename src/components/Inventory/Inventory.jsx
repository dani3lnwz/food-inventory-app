import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { inventoryId } = useParams();

  const [food, setFood] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/food/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, []);

  return (
    <div className="card rounded-xl w-96 bg-base-100 shadow-xl mb-4 mx-auto">
      <figure>
        <img className="w-50 mx-auto" src={food.img} alt="foods" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title text-xl font-bold">{food.name}</h2>
        <h4 className="font-semibold">Price: ${food.price}</h4>
        <p>{food.description}</p>
        <h5 className="font-semibold">Quantity: {food.quantity}</h5>
        <h6 className="font-semibold">Supplier: {food.supplyName}</h6>
      </div>
    </div>
  );
};

export default Inventory;
