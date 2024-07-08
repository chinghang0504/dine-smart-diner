import { useEffect, useState } from 'react';
import './FoodItems.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getFoodItems } from '../../services/server';

function FoodItems() {
  const { foodtype } = useParams();
  const [foodItems, setFoodItems] = useState([]);
  const navigate = useNavigate();

  // Load the data
  async function loadData() {
    try {
      const foodItems = await getFoodItems(foodtype);
      setFoodItems(foodItems);
    } catch {
      navigate('/menu');
    }
  }

  // Click an item
  function clickItem(foodItem) {
    console.log(foodItem);
  }

  // Execute once
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className='food-items'>
      <div className="food-items__header">
        <Link className='food-items__header-link' to='/menu'><i className="bi bi-arrow-left"></i></Link>
        <h1 className="food-items__header-title">{foodtype}</h1>
      </div>
      <ul className='food-items__list'>
        {foodItems.map((foodItem, index) => {
          return (
            <li className='food-items__item' key={index} onClick={() => clickItem(foodItem)}>
              <img className='food-items__image' src={foodItem.image} alt={foodItem.name} />
              <h2 className='food-items__image-description'>{foodItem.name}</h2>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FoodItems
