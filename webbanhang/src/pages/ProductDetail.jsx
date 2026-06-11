import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <h2>Sản phẩm không tồn tại</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: '1rem' }}>Quay lại cửa hàng</Link>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="product-detail-page section">
      <div className="container">
        <Link to="/products" className="btn btn-outline" style={{ marginBottom: '2rem' }}>
          <ArrowLeft size={18} /> Quay lại
        </Link>

        <div className="detail-grid">
          <div className="detail-image">
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ borderRadius: '1rem', width: '100%', boxShadow: 'var(--shadow)' }} 
            />
          </div>
          
          <div className="detail-info">
            <span style={{ color: 'var(--primary-color)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem' }}>
              {product.category}
            </span>
            <h1>{product.name}</h1>
            <p className="detail-price">{formatPrice(product.price)}</p>
            <p className="detail-desc">{product.description}</p>

            <div className="detail-specs">
              <h3>Thông số kỹ thuật</h3>
              <div className="spec-item">
                <span className="spec-label">Switch</span>
                <span className="spec-value">{product.specs.switch}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Layout</span>
                <span className="spec-value">{product.specs.layout}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Kết nối</span>
                <span className="spec-value">{product.specs.connection}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Pin</span>
                <span className="spec-value">{product.specs.battery}</span>
              </div>
            </div>

            <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
              <ShoppingCart size={20} /> Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
