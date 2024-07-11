import { useCart } from '../../context/CartContext';
import './Cart.scss';
import { sendFoodOrder } from '../../services/server';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import EmptyCartImage from '../../assets/images/empty-cart.jpg'

function Cart() {
  const navigate = useNavigate();

  useEffect(() => {
    const tableId = sessionStorage.getItem('tableId');
    if (!tableId) {
      navigate('/noid');
    }
  });

  const { cart, removeFromCart, clearCart } = useCart();

  async function clickSend() {
    const tableId = sessionStorage.getItem('tableId');

    try {
      await sendFoodOrder(tableId, cart)
      clearCart();
    } catch {
      // No action
    }
  }

  return (
    <div className='cart'>
      <div className="cart-header">
        <h1 className="cart-header__title">Your Cart</h1>
      </div>
      <div className='cart-content'>
        {cart.length === 0 ? (
          <div className='cart-content__container'>
            <img className='cart-content__image' src={EmptyCartImage} alt='Empty Cart'></img>
            <p className='cart-content__description'>Your cart is empty</p>
          </div>
        ) : (
          <div className='cart-content__container'>
            <ul className='cart-content__list'>
              {cart.map((item) => (
                <li className='cart-content__item' key={item.id}>
                  <img className='cart-content__image' src={item.image} alt="item.name" />
                  {item.name} - ${item.price}
                  <p className='cart-content__description'>Quantity: {item.quantity}</p>
                  <button className='cart-content__button' onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='cart-action'>
        {cart.length > 0 && <button className='cart-action__button' onClick={clearCart}>Clear Cart</button>}
        {cart.length > 0 && <button className='cart-action__button' onClick={clickSend}>Send Cart</button>}
      </div>
    </div>
  );
}

export default Cart
