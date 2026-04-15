//import { Link } from 'react-router'; The below import was used instead of the above one
import { NavLink } from 'react-router';
import './header.css'
import CartIcon from '../src/assets/images/icons/cart-icon.png';
import SearchIcon from '../src/assets/images/icons/search-icon.png';
import LogoWhite from '../src/assets/images/logo-white.png';
import MobileLogoWhite from '../src/assets/images/mobile-logo-white.png';
export function Header({cart}){
  let totalQuantity=0;
  cart.forEach((cartItem)=>{
    totalQuantity+=cartItem.quantity;
  })
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo"
              src={LogoWhite} />
            <img className="mobile-logo"
              src={MobileLogoWhite} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src={SearchIcon} />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/Orders">

            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/Checkout">
            <img className="cart-icon" src={CartIcon} />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>    
    </>
  );
}