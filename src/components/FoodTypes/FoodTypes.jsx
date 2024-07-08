import { useState } from 'react';
import { getFoodTypes } from '../../services/server';
import './FoodTypes.scss';
import { useEffect } from 'react';

function FoodTypes() {
  const [foodTypes, setFoodTypes] = useState([]);

  async function loadData() {
    const foodTypes = await getFoodTypes();
    console.log(foodTypes);
    setFoodTypes(foodTypes);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className='food-types'>
      <ul className='food-types__list'>
        { foodTypes.map((foodType, index) => {
            return (
              <li className='food-types__item' key={index}>
                <img className='food-types__image' src={foodType.image} alt={foodType.type} />
              </li>
            )
        })}
      </ul>
    </div>
  )
}

export default FoodTypes
