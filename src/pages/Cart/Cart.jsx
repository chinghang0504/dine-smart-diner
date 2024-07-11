import { useCart } from '../../context/CartContext';
import './Cart.scss';
import { sendFoodOrder } from '../../services/server';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  async function clickSend() {
    try {
      await sendFoodOrder(cart)
      clearCart();
    } catch {
      // No action
    }
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      {cart.length > 0 && <button onClick={clickSend}>Send Cart</button>}
    </div>
  );
}

export default Cart
