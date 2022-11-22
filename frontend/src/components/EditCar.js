import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCar = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCarById();
  }, []);

  async function updateCar(e) {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/cars/${id}`, {
        brand,
        model,
        price,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const getCarById = async () => {
    const response = await axios.get(`http://localhost:5000/cars/${id}`);
    setBrand(response.data.brand);
    setModel(response.data.model);
    setPrice(response.data.price);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateCar}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCar;
