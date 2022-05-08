import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Inventory = () => {
  const { inventoryId } = useParams();

  const [food, setFood] = useState({});

  const { quantity, name } = food;

  useEffect(() => {
    (async () => {
      const url = `http://localhost:5000/food/${inventoryId}`;
      try {
        const { data } = await axios.get(url);
        setFood(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [inventoryId, food]);

  const handleRestock = async (e) => {
    e.preventDefault();
    const reQuantity = parseInt(e.target.quantity.value);
    if (reQuantity >= 1) {
      const newQuantity = reQuantity + parseInt(quantity);
      console.log(reQuantity, quantity);

      console.log(newQuantity);
      const url = `http://localhost:5000/update/${inventoryId}`;
      try {
        const { data } = await axios.put(url, { newQuantity });
        if (data.modifiedCount === 1 || data.matchedCount === 1) {
          toast.success(`Successfully restock`);
        }
      } catch (error) {
        console.log(error);
      }
    }
    e.target.reset();
  };

  const handleDelivery = () => {
    (async () => {
      const newQuantity = { quantity };
      const url = `http://localhost:5000/food/${inventoryId}`;
      try {
        const { data } = await axios.put(url, newQuantity);
        if (data.modifiedCount) {
          toast.success("Delivered SuccessFully");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
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
      <div className="flex flex-col w-50 mx-auto">
        <button
          onClick={handleDelivery}
          className="btn bg-orange-500 text-white font-semibold rounded-full"
        >
          Deliver
        </button>
        <br />
        <form className="flex flex-col" onSubmit={handleRestock}>
          <input
            className="m-1 rounded-md border-2 border-green-900"
            type="number"
            placeholder="Restock Quantity"
            name="quantity"
            id=""
          />
          <input
            className="bg-green-600 text-slate-100 rounded-lg w-15 d--block p-1.5 mx-auto px-3 rounded-full"
            type="submit"
            value="Restock"
          />
        </form>
      </div>
      <div className="w-50 ml-4">
        <Link
          to="/managefood"
          className="btn bg-purple-500 text-white hover:bg-purple-700 p-2 px-4 rounded-full"
        >
          Manage Inventories
        </Link>
      </div>
    </>
  );
};

export default Inventory;
