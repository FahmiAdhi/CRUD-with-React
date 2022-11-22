import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarList from "./components/CarList";
import AddCar from "./components/AddCar.js";
import EditCar from "./components/EditCar.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="add" element={<AddCar />} />
        <Route path="edit/:id" element={<EditCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
