import axios from "axios";

// Global constants
const DATABASE_URL = import.meta.env.VITE_DATABASE_URL;

// Get the food types
export async function getFoodTypes() {
    const res = await axios.get(`${DATABASE_URL}/menu/foodtypes`);
    return res.data.map((foodType) => {
        foodType.image = `${DATABASE_URL}/foodtypes/${foodType.image}`;
        return foodType;
    });
}

// Get the food items
export async function getFoodItems() {
    const res = await axios.get(`${DATABASE_URL}/menu/fooditems`);
    return res.data;
}
