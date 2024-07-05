import './FoodTypes.scss';

function FoodTypes(props) {
  const foodTypes = props.foodTypes;
  const DATABASE_URL = import.meta.env.VITE_DATABASE_URL;

  return (
    <ul className='food-types__list'>
      {foodTypes.map((foodType, index) => {
        return (
          <li className='food-types__item' key={index}>
            <img className='food-types__image' src={foodType.image} alt={foodType.type} />
            {foodType.type}
          </li>
        )
      })}
    </ul>
  )
}

export default FoodTypes
