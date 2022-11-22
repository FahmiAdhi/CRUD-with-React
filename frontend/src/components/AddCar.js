import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const saveCar = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/cars", {
        brand,
        model,
        price,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveCar}>
          <div className="field">
            <label className="label">Brand</label>
            <div className="control">
              <input type="text" className="input" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand" />
            </div>
          </div>
          <div className="field">
            <label className="label">Model</label>
            <div className="control">
              <input type="text" className="input" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Model" />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input type="text" className="input" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
