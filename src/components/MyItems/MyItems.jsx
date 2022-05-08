import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/myitem?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setItems(data);
    };
    getItems();
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/food/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
          toast.success("Item Deleted");
        });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-green-600 text-center mb-3">
        My Items
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
            {items.map((item, index) => (
              <tr
                key={item._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } whitespace-nowrap`}
              >
                {/* ::User Name */}
                <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                  {item.name}
                </td>
                {/* ::Supplier NAme */}
                <td className="py-3 px-4 text-base text-gray-500 font-medium">
                  {item.supplyName}
                </td>
                {/* ::Price */}
                <td className="py-3 px-4 text-base text-gray-500 font-medium">
                  {item.price}
                </td>
                {/* ::Quantity */}
                <td className="py-3 px-4 text-base text-gray-500 font-medium">
                  {item.quantity}
                </td>
                {/* ::Action Buttons */}
                <td className="py-3 px-4 flex justify-around items-center space-x-6 text-base text-gray-700 font-medium">
                  {/* :::delete button */}
                  <button
                    onClick={() => handleDelete(item._id)}
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

export default MyItems;
