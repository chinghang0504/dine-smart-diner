import axios from "axios";

// Global constants
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

// Get the food types
export async function getFoodTypes() {
  const res = await axios.get(`${SERVER_URL}/diner/menu/foodtypes`);
  return res.data.map((foodType) => {
    foodType.image = foodType.image ? `${SERVER_URL}/foodtypes/${foodType.image}` : `${SERVER_URL}/placeholder.png`;
    return foodType;
  });
}

// Get the food items
export async function getFoodItems(foodtype) {
  const res = await axios.get(`${SERVER_URL}/diner/menu/fooditems`, { params: { foodtype }});
  return res.data.map((foodItem) => {
    foodItem.image = foodItem.image ? `${SERVER_URL}/fooditems/${foodItem.image}` : `${SERVER_URL}/placeholder.png`;
    return foodItem;
  });
}
