import React from "react";
import DisplayFoodItems from "./components/DisplayFoodItems"
import { items } from "./data/data";
console.log( {items})
function App() {
  return (
    <div>
      <DisplayFoodItems foodList={items} />
    </div>
); }
export default App;