import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-badge">{product.category}</div>
      </div>
      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>
        <p className="product-price">{formatPrice(product.price)}</p>
        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="btn btn-outline">Chi tiết</Link>
          <button className="btn btn-primary"><ShoppingCart size={18} /> Mua</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
