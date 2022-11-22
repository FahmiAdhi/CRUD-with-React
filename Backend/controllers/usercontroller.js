import Cars from "../models/UserModel.js";

export const getCars = async (req, res) => {
  try {
    const response = await Cars.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCarsById = async (req, res) => {
  try {
    const response = await Cars.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createCars = async (req, res) => {
  try {
    await Cars.create(req.body);
    res.status(201).json({ msg: "Cars Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCars = async (req, res) => {
  try {
    await Cars.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Cars Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCars = async (req, res) => {
  try {
    await Cars.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Cars Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
