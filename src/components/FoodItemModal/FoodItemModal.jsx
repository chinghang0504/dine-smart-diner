import { useState } from 'react';
import './FoodItemModal.scss';
import { Modal, Button } from 'react-bootstrap';

function FoodItemModal({ show, handleClose, handleSend, foodItem }) {
  const [quantity, setQuantity] = useState(0);

  function clickMinus() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function clickPlus() {
    if (quantity <= 9) {
      setQuantity(quantity + 1);
    }
  }

  function clickSend() {
    handleSend(foodItem, quantity);
    setQuantity(0);
  }

  function clickCancel() {
    setQuantity(0);
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <div className='modal'>
        <div className='modal-header'>
          <h2 className='modal-header__title'>{foodItem.name}</h2>
          <button className='modal-header__close-button' onClick={clickCancel}><i className="modal-header__close-icon bi bi-x-circle"></i></button>
        </div>
        <div className='modal-content'>
          <img className='modal-content__image' src={foodItem.image} alt={foodItem.name} />
          <p className='modal-content__description'>{foodItem.description}</p>
          <p className='modal-content__price'>Price: {foodItem.price}</p>
          <div className='modal-content__quantity-container'>
            <button className='modal-content__quantity-button' onClick={clickMinus}><i className="bi bi-dash-circle"></i></button>
            <p className='modal-content__quantity'>{quantity}</p>
            <button className='modal-content__quantity-button' onClick={clickPlus}><i className="bi bi-plus-circle"></i></button>
          </div>
          <div className='modal-action'>
            <button className='modal-action__button' onClick={clickCancel}>Cancel</button>
            {quantity > 0 && <button className='modal-action__button' onClick={clickSend}>Add to Cart</button>}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default FoodItemModal
