import './Menu.scss'
import { getFoodTypes } from '../../services/database';
import { useEffect, useState } from 'react';
import FoodTypes from '../../components/FoodTypes/FoodTypes';

function menu() {
  const [foodTypes, setFoodTypes] = useState([]);

  useEffect(() => {
    async function loadData() {
      const foodTypes = await getFoodTypes();
      setFoodTypes(foodTypes);
    }
    loadData();
  });

  return (
    <>
      <div>menu</div>
      <FoodTypes foodTypes={foodTypes} />
    </>
  )
}

export default menu
