import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const AddFood = (e) => {
  const [user] = useAuthState(auth);
  const { email } = user;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://khabarchi-server-production.up.railway.app/food`;
    axios.post(url, data).then((response) => {
      const { data } = response;
      console.log(data);
      if (data.insertedId) {
        e.target.reset();
        toast.success("Your Item is added");
      }
    });

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center text-2xl font-semibold text-green-500 mb-3">
        Add a Food Item
      </h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2 border"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2 border"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2 border"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2 border"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2 border"
          placeholder="Supplier Name"
          type="text"
          value={email}
          {...register("email")}
        />
        <input
          className="mb-2 border"
          placeholder="Supplier Name"
          type="text"
          {...register("supplyName")}
        />
        <input
          className="mb-2 border"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input
          className="btn btn-primary bg-blue-500"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddFood;
