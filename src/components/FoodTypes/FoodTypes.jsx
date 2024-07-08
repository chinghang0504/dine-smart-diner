import { useState } from 'react';
import { getFoodTypes } from '../../services/server';
import './FoodTypes.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FoodTypes() {
  const [foodTypes, setFoodTypes] = useState([]);
  const navigate = useNavigate();

  // Load the data
  async function loadData() {
    const foodTypes = await getFoodTypes();
    setFoodTypes(foodTypes);
  }

  // Click an item
  function clickItem(foodType) {
    navigate(`/menu/${foodType}`);
  }

  // Execute once
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className='food-types'>
      <ul className='food-types__list'>
        {foodTypes.map((foodType, index) => {
          return (
            <li className='food-types__item' key={index} onClick={() => clickItem(foodType.type)}>
              <img className='food-types__image' src={foodType.image} alt={foodType.type} />
              <h2 className='food-types__image-description'>{foodType.type}</h2>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FoodTypes
