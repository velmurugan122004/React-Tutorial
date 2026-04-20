import './Checkout-header.css';
import { Link } from 'react-router';
import CheckoutLockIcon from '../../assets/images/icons/checkout-lock-icon.png';
import Logo from '../../assets/images/logo.png';
import MobileLogo from '../../assets/images/mobile-logo.png';
export function CheckoutHeader({cart}){
  let totalQuamtity=0;
  cart.forEach((cartItem)=>{
    totalQuamtity+=cartItem.quantity;
  })
  return(
    <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src={Logo} />
              <img className={MobileLogo} />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/">{totalQuamtity} {totalQuamtity<=1?'Item':'Items'}</Link>)
          </div>
          <div className="checkout-header-right-section">
            <img src={CheckoutLockIcon} />
          </div>
        </div>
      </div>
  );
}