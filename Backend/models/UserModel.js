import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Cars = db.define(
  "cars",
  {
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    price: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);
export default Cars;

(async () => {
  await db.sync();
})();
