import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { name, price, description, img, quantity, supplyName, _id } = product;

  const navigate = useNavigate();
  const navigateToInventory = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div className="card rounded-xl w-96 bg-base-100 shadow-xl mb-4 m-0">
      <figure>
        <img className="w-50 mx-auto" src={img} alt="foods" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title text-xl font-bold">{name}</h2>
        <h4 className="font-semibold">Price: ${price}</h4>
        <p>{description}</p>
        <h5 className="font-semibold">Quantity: {quantity}</h5>
        <h6 className="font-semibold">Supplier: {supplyName}</h6>
      </div>
      <div className="grid justify-center mb-3">
        <button onClick={() => navigateToInventory(_id)}className="btn bg-blue-500 text-white hover:bg-blue-700 p-2 px-4 rounded-full">
          Update
        </button>
      </div>
    </div>
  );
};

export default Product;
