import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const ManageInventory = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://enigmatic-headland-05780.herokuapp.com/food/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold text-green-600 text-center mb-3">
        Manage Inventory
      </h2>
      <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
        <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">
          {/* :TABLE HEAD */}
          <thead className="min-w-full bg-gray-100 text-left text-gray-700">
            <tr>
              {/* ::Name */}
              <th
                className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                scope="col"
              >
                Name
              </th>
              {/* ::Supplier Name */}
              <th
                className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                scope="col"
              >
                Supplier Name
              </th>
              {/* ::Price */}
              <th
                className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                scope="col"
              >
                Price
              </th>
              {/* ::Quantity */}
              <th
                className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                scope="col"
              >
                Quantity
              </th>
              {/* ::Actions */}
              <th
                className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide"
                scope="col"
              >
                Actions
              </th>
            </tr>
          </thead>

          {/* :TABLE BODY */}
          <tbody className="">
            {products.map((product, index) => (
              <tr
                key={product._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } whitespace-nowrap`}
              >
                {/* ::User Name */}
                <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                  {product.name}
                </td>
                {/* ::Supplier NAme */}
                <td className="py-3 px-4 text-base text-gray-500 font-medium">
                  {product.supplyName}
                </td>
                {/* ::Price */}
                <td className="py-3 px-4 text-base text-gray-500 font-medium">
                  {product.price}
                </td>
                {/* ::Quantity */}
                <td className="py-3 px-4 text-base text-gray-500 font-medium">
                  {product.quantity}
                </td>
                {/* ::Action Buttons */}
                <td className="py-3 px-4 flex justify-around items-center space-x-6 text-base text-gray-700 font-medium">
                  {/* :::delete button */}
                  <button
                    onClick={() => handleDelete(product._id)}
                    type="button"
                    className="text-white px-2 rounded-xl font-semibold hover:bg-red-700 bg-red-500 text-base"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <Link
        to="/addfood"
        className="btn bg-purple-500 text-white hover:bg-purple-700 p-2 px-4 rounded-full"
      >
        Add New Item
      </Link>
    </div>
  );
};
export default ManageInventory;
