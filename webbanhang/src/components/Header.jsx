import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, User, Menu, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            Keyboard<span>Shop</span>
          </Link>

          <nav className="nav">
            <NavLink to="/" end>Trang chủ</NavLink>
            <NavLink to="/products">Sản phẩm</NavLink>
            <NavLink to="/news">Tin tức</NavLink>
            <NavLink to="/contact">Liên hệ</NavLink>
          </nav>

          <div className="header-actions">
            <button className="action-btn"><Search size={20} /></button>
            <Link to="/login" className="action-btn"><User size={20} /></Link>
            <button className="action-btn cart-btn" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="cart-count">{totalItems > 99 ? '99+' : totalItems}</span>
              )}
            </button>
            <button className="menu-toggle"><Menu size={20} /></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
