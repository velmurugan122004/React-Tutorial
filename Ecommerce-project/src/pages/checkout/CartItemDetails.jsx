import { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";
export function CartItemDetails({ cartItem, deleteCartItem, loadCart }) {
  const [isEditing, setIsEditing] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const saveQuantity = async () => {
    await axios.put(`/api/cart-items/${cartItem.product.id}`, {
      quantity: Number(quantity)
    });
    await loadCart();
    setIsEditing(false);
  }
  const updateQuantityInput = (event) => {
    const value = Number(event.target.value);

    if (value <= 100) {
      setQuantity(value);
    }
  }
  return (
    <>
      <img className="product-image"
        src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          {
            !isEditing ? (
              <>
                <span>
                  Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                </span>
                <span className="update-quantity-link link-primary" onClick={() => setIsEditing(true)}>
                  Update
                </span>
              </>
            ) : (
              <>
                <span>Quantity:
                  <input className="updateButton"
                    type="number"
                    value={quantity}
                    min={'1'} max={'50'}
                    onChange={updateQuantityInput} />
                  <button className="saveButton" onClick={saveQuantity}>Save</button>
                </span>

              </>
            )
          }
          <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  );
}