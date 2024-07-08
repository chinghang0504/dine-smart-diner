import axios from "axios";

// Global constants
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

// Get the food types
export async function getFoodTypes() {
  const res = await axios.get(`${SERVER_URL}/menu/foodtypes`);
  return res.data.map((foodType) => {
    foodType.image = `${SERVER_URL}/foodtypes/${foodType.image}`;
    return foodType;
  });
}

// Get the food items
export async function getFoodItems() {
  const res = await axios.get(`${SERVER_URL}/menu/fooditems`);
  return res.data.map((foodItem) => {
    foodItem.image = `${SERVER_URL}/foodtypes/${foodItem.image}`;
    return foodItem;
  });
}
