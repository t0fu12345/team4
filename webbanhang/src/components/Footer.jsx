import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <Link to="/" className="logo">
              Keyboard<span>Shop</span>
            </Link>
            <p>Chuyên cung cấp các loại bàn phím cơ cao cấp, chính hãng với dịch vụ tốt nhất.</p>
            <div className="social-links">
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Globe size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Chính sách</h4>
            <ul>
              <li><Link to="#">Chính sách bảo hành</Link></li>
              <li><Link to="#">Chính sách đổi trả</Link></li>
              <li><Link to="#">Chính sách vận chuyển</Link></li>
              <li><Link to="#">Bảo mật thông tin</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Liên kết</h4>
            <ul>
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/products">Sản phẩm</Link></li>
              <li><Link to="/news">Tin tức</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Liên hệ</h4>
            <ul>
              <li><MapPin size={18} /> 123 Đường ABC, Quận XYZ, TP. HCM</li>
              <li><Phone size={18} /> 0123 456 789</li>
              <li><Mail size={18} /> support@keyboardshop.vn</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 KeyboardShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
