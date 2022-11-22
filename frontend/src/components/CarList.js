import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CarList = () => {
  const [cars, setCar] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const response = await axios.get("http://localhost:5000/cars");
    setCar(response.data);
  };

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
      getCars();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-primary">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={car.id}>
                <td>{index + 1}</td>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.price}</td>
                <td>
                  <Link to={`edit/${car.id}`} className="button is-small is-info mr-2">
                    Edit
                  </Link>
                  <button onClick={() => deleteCar(car.id)} className="button is-small is-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarList;
